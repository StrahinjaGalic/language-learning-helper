import express from 'express';
import User from '../models/User.js';
import { encrypt } from '../services/encryption.js';
import { validateToken } from '../services/wanikaniApi.js';

const router = express.Router();

// POST /api/auth/validate-token
router.post('/validate-token', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }

    // Validate token with WaniKani API
    const validation = await validateToken(token);

    if (!validation.valid) {
      return res.status(401).json({ error: 'Invalid WaniKani token' });
    }

    const wkUser = validation.user;

    // Check if user already exists
    let user = await User.findOne({ wkUserId: wkUser.id });

    if (user) {
      // Update existing user
      user.encryptedToken = encrypt(token);
      user.username = wkUser.username;
      user.level = wkUser.level;
      user.lastSync = new Date();
      await user.save();
    } else {
      // Create new user
      user = new User({
        wkUserId: wkUser.id,
        username: wkUser.username,
        encryptedToken: encrypt(token),
        level: wkUser.level
      });
      await user.save();
    }

    res.json({
      success: true,
      userId: user._id,
      username: user.username,
      level: user.level
    });

  } catch (error) {
    console.error('Token validation error:', error);
    res.status(500).json({ error: 'Failed to validate token' });
  }
});

export default router;
