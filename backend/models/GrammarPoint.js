import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema({
  japanese: { type: String, required: true },
  reading: { type: String, required: true },
  english: { type: String, required: true },
  breakdown: { type: String }
}, { _id: false });

const resourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true }
}, { _id: false });

const grammarPointSchema = new mongoose.Schema({
  grammarId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  titleJapanese: { type: String, required: true },
  jlptLevel: { type: String, required: true, enum: ['N5', 'N4', 'N3', 'N2', 'N1'] },
  category: { type: String, required: true },
  taeKimSection: { type: String }, // e.g., "Basic Grammar - State of Being"
  taeKimOrder: { type: Number }, // Order in Tae Kim's guide
  explanation: { type: String, required: true },
  structure: { type: String, required: true },
  examples: [exampleSchema],
  notes: { type: String },
  relatedGrammar: [{ type: String }],
  tags: [{ type: String }],
  difficulty: { type: Number, min: 1, max: 10, default: 5 },
  resources: [resourceSchema]
}, {
  timestamps: true
});

grammarPointSchema.index({ jlptLevel: 1, category: 1 });
grammarPointSchema.index({ grammarId: 1 });
grammarPointSchema.index({ title: 'text', titleJapanese: 'text', explanation: 'text' });

const GrammarPoint = mongoose.model('GrammarPoint', grammarPointSchema);

export default GrammarPoint;
