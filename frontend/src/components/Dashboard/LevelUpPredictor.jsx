import React, { useState, useEffect } from 'react';
import { getLevelProgress } from '../../services/api';
import './LevelUpPredictor.css';

const LevelUpPredictor = () => {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      setLoading(true);
      const data = await getLevelProgress();
      setProgress(data);
    } catch (error) {
      console.error('Error fetching level progress:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="level-progress-loading">Loading level progress...</div>;
  }

  if (!progress) return null;

  const remaining = progress.requiredToPass - progress.guruKanji;
  
  // Estimate days until level up (assuming ~20 items per day guru'd)
  const estimatedDays = remaining > 0 ? Math.ceil(remaining / 20) : 0;

  return (
    <div className="level-up-predictor-simple">
      <h3>⏱️ Level Up Estimate</h3>
      {progress.isReadyToLevelUp ? (
        <div className="level-up-ready">
          <div className="ready-icon">🎉</div>
          <p className="ready-text">Ready to level up!</p>
        </div>
      ) : (
        <div className="estimate-content">
          <div className="days-number">{estimatedDays}</div>
          <div className="days-label">day{estimatedDays !== 1 ? 's' : ''} until Level {progress.currentLevel + 1}</div>
          <div className="kanji-remaining">{remaining} kanji to guru</div>
        </div>
      )}
    </div>
  );
};

export default LevelUpPredictor;
