import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  wkUserId: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  encryptedToken: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastSync: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

export default User;
