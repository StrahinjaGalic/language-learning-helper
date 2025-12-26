import User from '../models/User.js';
import { decrypt } from '../services/encryption.js';

export const authenticate = async (req, res, next) => {
  try {
    const userId = req.headers['x-user-id'];
    
    if (!userId) {
      return res.status(401).json({ error: 'User ID required' });
    }

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Decrypt token for API calls
    req.wkToken = decrypt(user.encryptedToken);
    req.user = user;
    
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Authentication failed' });
  }
};
