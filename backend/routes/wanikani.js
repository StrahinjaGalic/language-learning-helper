import express from 'express';
import { authenticate } from '../middleware/auth.js';
import {
  getUserProfile,
  getSummary,
  getAssignments,
  getReviewStatistics,
  getReviews,
  getSubjects,
  calculateStats,
  calculateDailyReviewCount
} from '../services/wanikaniApi.js';
import Snapshot from '../models/Snapshot.js';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// GET /api/wk/profile
router.get('/profile', async (req, res) => {
  try {
    const profile = await getUserProfile(req.wkToken);
    res.json(profile);
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// GET /api/wk/summary
router.get('/summary', async (req, res) => {
  try {
    const summary = await getSummary(req.wkToken);
    res.json(summary);
  } catch (error) {
    console.error('Summary fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch summary' });
  }
});

// GET /api/wk/review-forecast
router.get('/review-forecast', async (req, res) => {
  try {
    const summary = await getSummary(req.wkToken);
    res.json(summary.reviews);
  } catch (error) {
    console.error('Review forecast fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch review forecast' });
  }
});

// GET /api/wk/stats
router.get('/stats', async (req, res) => {
  try {
    const [assignments, reviewStats, todayReviews] = await Promise.all([
      getAssignments(req.wkToken),
      getReviewStatistics(req.wkToken),
      getReviews(req.wkToken)
    ]);

    const stats = calculateStats(assignments, reviewStats);
    const dailyReviewsCompleted = calculateDailyReviewCount(todayReviews);

    // Create or update today's snapshot
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await Snapshot.findOneAndUpdate(
      { userId: req.user._id, date: today },
      {
        userId: req.user._id,
        date: today,
        reviewCount: stats.reviewCount, // Total reviews ever
        dailyReviewsCompleted,
        srs: stats.srs,
        accuracy: stats.accuracy,
        totalItems: stats.totalItems
      },
      { upsert: true, new: true }
    );

    res.json({ ...stats, dailyReviewsCompleted });
  } catch (error) {
    console.error('Stats fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

// GET /api/snapshots
router.get('/snapshots', async (req, res) => {
  try {
    const { days = 10 } = req.query;
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(days));
    startDate.setHours(0, 0, 0, 0);

    const snapshots = await Snapshot.find({
      userId: req.user._id,
      date: { $gte: startDate }
    }).sort({ date: 1 });

    res.json(snapshots);
  } catch (error) {
    console.error('Snapshots fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch snapshots' });
  }
});

// GET /api/wk/streaks
router.get('/streaks', async (req, res) => {
  try {
    // Get last 365 days of snapshots
    const oneYearAgo = new Date();
    oneYearAgo.setDate(oneYearAgo.getDate() - 365);
    oneYearAgo.setHours(0, 0, 0, 0);

    const snapshots = await Snapshot.find({
      userId: req.user._id,
      date: { $gte: oneYearAgo }
    }).sort({ date: 1 });

    // Calculate current streak
    let currentStreak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let checkDate = new Date(today);

    for (let i = snapshots.length - 1; i >= 0; i--) {
      const snapshot = snapshots[i];
      const snapshotDate = new Date(snapshot.date);
      snapshotDate.setHours(0, 0, 0, 0);

      if (snapshotDate.getTime() === checkDate.getTime() && snapshot.dailyReviewsCompleted > 0) {
        currentStreak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else if (snapshotDate.getTime() < checkDate.getTime()) {
        break;
      }
    }

    // Calculate longest streak
    let longestStreak = 0;
    let tempStreak = 0;
    let lastDate = null;

    snapshots.forEach(snapshot => {
      const snapshotDate = new Date(snapshot.date);
      snapshotDate.setHours(0, 0, 0, 0);

      if (snapshot.dailyReviewsCompleted > 0) {
        if (!lastDate || (snapshotDate.getTime() - lastDate.getTime()) === 86400000) {
          tempStreak++;
        } else {
          tempStreak = 1;
        }
        longestStreak = Math.max(longestStreak, tempStreak);
        lastDate = snapshotDate;
      } else {
        tempStreak = 0;
        lastDate = null;
      }
    });

    // Create activity map for heatmap
    const activityMap = {};
    snapshots.forEach(snapshot => {
      const dateKey = snapshot.date.toISOString().split('T')[0];
      activityMap[dateKey] = snapshot.dailyReviewsCompleted || 0;
    });

    res.json({
      currentStreak,
      longestStreak,
      activityMap
    });
  } catch (error) {
    console.error('Streaks fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch streaks' });
  }
});

// GET /api/wk/items - Get all learned items with details
router.get('/items', async (req, res) => {
  try {
    const [assignments, reviewStats] = await Promise.all([
      getAssignments(req.wkToken),
      getReviewStatistics(req.wkToken)
    ]);

    // Get only started assignments
    const activeAssignments = assignments.filter(a => a.data && a.data.srs_stage > 0);
    
    // Get subject IDs
    const subjectIds = activeAssignments.map(a => a.data.subject_id);
    
    // Fetch subjects
    const subjects = await getSubjects(req.wkToken, subjectIds);
    
    // Create a map of review stats by subject_id
    const reviewStatsMap = {};
    reviewStats.forEach(stat => {
      reviewStatsMap[stat.data.subject_id] = stat.data;
    });
    
    // Combine data
    const items = activeAssignments.map(assignment => {
      const subject = subjects.find(s => s.id === assignment.data.subject_id);
      const stats = reviewStatsMap[assignment.data.subject_id];
      
      if (!subject) return null;
      
      const srsStageNames = ['', 'Apprentice I', 'Apprentice II', 'Apprentice III', 'Apprentice IV', 
                             'Guru I', 'Guru II', 'Master', 'Enlightened', 'Burned'];
      
      return {
        id: subject.id,
        type: subject.object,
        level: subject.data.level,
        characters: subject.data.characters || subject.data.slug,
        meanings: subject.data.meanings?.map(m => m.meaning) || [],
        readings: subject.data.readings?.map(r => r.reading) || [],
        srsStage: assignment.data.srs_stage,
        srsStageName: srsStageNames[assignment.data.srs_stage] || 'Unknown',
        meaningAccuracy: stats ? 
          Math.round((stats.meaning_correct / (stats.meaning_correct + stats.meaning_incorrect || 1)) * 100) : 0,
        readingAccuracy: stats && subject.object !== 'radical' ? 
          Math.round((stats.reading_correct / (stats.reading_correct + stats.reading_incorrect || 1)) * 100) : null,
        totalCorrect: (stats?.meaning_correct || 0) + (stats?.reading_correct || 0),
        totalIncorrect: (stats?.meaning_incorrect || 0) + (stats?.reading_incorrect || 0)
      };
    }).filter(Boolean);
    
    res.json(items);
  } catch (error) {
    console.error('Items fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

export default router;
