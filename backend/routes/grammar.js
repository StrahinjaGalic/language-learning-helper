import express from 'express';
import GrammarPoint from '../models/GrammarPoint.js';
import UserGrammarProgress from '../models/UserGrammarProgress.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Get all grammar points with optional filters
router.get('/', authenticate, async (req, res) => {
  try {
    const { jlptLevel, category, search } = req.query;
    const filter = {};
    
    if (jlptLevel) filter.jlptLevel = jlptLevel;
    if (category) filter.category = category;
    if (search) {
      filter.$text = { $search: search };
    }
    
    const grammarPoints = await GrammarPoint.find(filter).sort({ jlptLevel: 1, difficulty: 1 });
    
    // Get user's progress for these grammar points
    const grammarIds = grammarPoints.map(g => g.grammarId);
    const progress = await UserGrammarProgress.find({
      userId: req.user._id,
      grammarId: { $in: grammarIds }
    });
    
    // Merge progress with grammar points
    const progressMap = {};
    progress.forEach(p => {
      progressMap[p.grammarId] = p;
    });
    
    const result = grammarPoints.map(g => ({
      ...g.toObject(),
      userProgress: progressMap[g.grammarId] || { status: 'not-started' }
    }));
    
    res.json(result);
  } catch (error) {
    console.error('Error fetching grammar points:', error);
    res.status(500).json({ error: 'Failed to fetch grammar points' });
  }
});

// Get single grammar point by ID
router.get('/:grammarId', authenticate, async (req, res) => {
  try {
    const grammarPoint = await GrammarPoint.findOne({ grammarId: req.params.grammarId });
    
    if (!grammarPoint) {
      return res.status(404).json({ error: 'Grammar point not found' });
    }
    
    // Get user's progress
    const progress = await UserGrammarProgress.findOne({
      userId: req.user._id,
      grammarId: req.params.grammarId
    });
    
    res.json({
      ...grammarPoint.toObject(),
      userProgress: progress || { status: 'not-started' }
    });
  } catch (error) {
    console.error('Error fetching grammar point:', error);
    res.status(500).json({ error: 'Failed to fetch grammar point' });
  }
});

// Get user's grammar statistics
router.get('/stats/overview', authenticate, async (req, res) => {
  try {
    const userId = req.user._id;
    
    // Get all progress records for this user
    const allProgress = await UserGrammarProgress.find({ userId });
    
    // Get total grammar points
    const totalGrammar = await GrammarPoint.countDocuments();
    
    // Calculate stats by status
    const statsByStatus = {
      'not-started': totalGrammar - allProgress.length,
      'learning': 0,
      'reviewing': 0,
      'mastered': 0
    };
    
    allProgress.forEach(p => {
      statsByStatus[p.status]++;
    });
    
    // Stats by JLPT level
    const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
    const statsByLevel = {};
    
    for (const level of levels) {
      const count = await GrammarPoint.countDocuments({ jlptLevel: level });
      statsByLevel[level] = count;
    }
    
    // Calculate total reviews and accuracy
    const totalReviews = allProgress.reduce((sum, p) => sum + p.timesReviewed, 0);
    const totalCorrect = allProgress.reduce((sum, p) => sum + p.correctAnswers, 0);
    const totalIncorrect = allProgress.reduce((sum, p) => sum + p.incorrectAnswers, 0);
    const totalAnswers = totalCorrect + totalIncorrect;
    const accuracy = totalAnswers > 0 ? totalCorrect / totalAnswers : null;
    
    res.json({
      total: totalGrammar,
      byStatus: statsByStatus,
      byLevel: statsByLevel,
      totalReviews,
      accuracy
    });
  } catch (error) {
    console.error('Error fetching grammar stats:', error);
    res.status(500).json({ error: 'Failed to fetch grammar statistics' });
  }
});

// Update user's progress for a grammar point
router.put('/progress/:grammarId', authenticate, async (req, res) => {
  try {
    const { status, confidence, notes } = req.body;
    const userId = req.user._id;
    const { grammarId } = req.params;
    
    // Check if grammar point exists
    const grammarPoint = await GrammarPoint.findOne({ grammarId });
    if (!grammarPoint) {
      return res.status(404).json({ error: 'Grammar point not found' });
    }
    
    const updateData = {
      userId,
      grammarId,
      lastReviewed: new Date()
    };
    
    if (status) updateData.status = status;
    if (confidence) updateData.confidence = confidence;
    if (notes !== undefined) updateData.notes = notes;
    
    const progress = await UserGrammarProgress.findOneAndUpdate(
      { userId, grammarId },
      { 
        $set: updateData,
        $inc: { timesReviewed: 1 }
      },
      { upsert: true, new: true }
    );
    
    res.json(progress);
  } catch (error) {
    console.error('Error updating grammar progress:', error);
    res.status(500).json({ error: 'Failed to update grammar progress' });
  }
});

// Get user's progress for all grammar
router.get('/progress/all', authenticate, async (req, res) => {
  try {
    const progress = await UserGrammarProgress.find({ userId: req.user._id })
      .sort({ updatedAt: -1 });
    
    res.json(progress);
  } catch (error) {
    console.error('Error fetching user progress:', error);
    res.status(500).json({ error: 'Failed to fetch user progress' });
  }
});

export default router;
