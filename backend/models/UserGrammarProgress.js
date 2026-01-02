import mongoose from 'mongoose';

const userGrammarProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  grammarId: { type: String, required: true },
  status: { 
    type: String, 
    required: true, 
    enum: ['not-started', 'learning', 'reviewing', 'mastered'],
    default: 'not-started'
  },
  lastReviewed: { type: Date },
  timesReviewed: { type: Number, default: 0 },
  correctAnswers: { type: Number, default: 0 },
  incorrectAnswers: { type: Number, default: 0 },
  confidence: { type: Number, min: 1, max: 5, default: 3 },
  notes: { type: String }
}, {
  timestamps: true
});

userGrammarProgressSchema.index({ userId: 1, grammarId: 1 }, { unique: true });
userGrammarProgressSchema.index({ userId: 1, status: 1 });

const UserGrammarProgress = mongoose.model('UserGrammarProgress', userGrammarProgressSchema);

export default UserGrammarProgress;
