import mongoose from 'mongoose';

const snapshotSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  date: {
    type: Date,
    required: true,
    index: true
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  dailyReviewsCompleted: {
    type: Number,
    default: 0
  },
  srs: {
    apprentice: { type: Number, default: 0 },
    guru: { type: Number, default: 0 },
    master: { type: Number, default: 0 },
    enlightened: { type: Number, default: 0 },
    burned: { type: Number, default: 0 }
  },
  accuracy: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  totalItems: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Ensure one snapshot per user per day
snapshotSchema.index({ userId: 1, date: 1 }, { unique: true });

const Snapshot = mongoose.model('Snapshot', snapshotSchema);

export default Snapshot;
