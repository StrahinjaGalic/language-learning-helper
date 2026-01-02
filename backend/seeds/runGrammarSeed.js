import mongoose from 'mongoose';
import { grammarSeedData } from './grammarSeed.js';
import GrammarPoint from '../models/GrammarPoint.js';
import dotenv from 'dotenv';

dotenv.config();

const seedGrammarPoints = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing grammar points
    await GrammarPoint.deleteMany({});
    console.log('Cleared existing grammar points');

    // Insert seed data
    const result = await GrammarPoint.insertMany(grammarSeedData);
    console.log(`Successfully inserted ${result.length} grammar points`);

    // Disconnect
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding grammar points:', error);
    process.exit(1);
  }
};

seedGrammarPoints();
