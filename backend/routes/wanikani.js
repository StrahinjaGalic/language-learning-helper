import express from 'express';
import { authenticate } from '../middleware/auth.js';
import {
  getUserProfile,
  getSummary,
  getAssignments,
  getReviewStatistics,
  calculateStats
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

// GET /api/wk/stats
router.get('/stats', async (req, res) => {
  try {
    const [assignments, reviewStats] = await Promise.all([
      getAssignments(req.wkToken),
      getReviewStatistics(req.wkToken)
    ]);

    const stats = calculateStats(assignments, reviewStats);

    // Create or update today's snapshot
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await Snapshot.findOneAndUpdate(
      { userId: req.user._id, date: today },
      {
        userId: req.user._id,
        date: today,
        reviewCount: stats.reviewCount, // Total reviews ever
        srs: stats.srs,
        accuracy: stats.accuracy,
        totalItems: stats.totalItems
      },
      { upsert: true, new: true }
    );

    res.json(stats);
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

export default router;
