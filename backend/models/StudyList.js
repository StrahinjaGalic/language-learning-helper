import mongoose from 'mongoose';

const studyListSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  itemIds: [{
    type: Number,  // WaniKani subject IDs
    required: true
  }],
  category: {
    type: String,
    enum: ['custom', 'leeches', 'almost-burned', 'jlpt-n5', 'jlpt-n4', 'jlpt-n3', 'jlpt-n2', 'jlpt-n1', 'other'],
    default: 'custom'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

studyListSchema.index({ userId: 1, name: 1 });

studyListSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const StudyList = mongoose.model('StudyList', studyListSchema);

export default StudyList;
