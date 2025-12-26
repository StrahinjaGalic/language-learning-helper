import React from 'react';
import './AccuracyDisplay.css';

const AccuracyDisplay = ({ accuracy }) => {
  const getAccuracyColor = (acc) => {
    if (acc >= 90) return '#43e97b';
    if (acc >= 75) return '#f093fb';
    if (acc >= 60) return '#ffa726';
    return '#ef5350';
  };

  const getAccuracyLabel = (acc) => {
    if (acc >= 90) return 'Excellent';
    if (acc >= 75) return 'Good';
    if (acc >= 60) return 'Fair';
    return 'Needs Work';
  };

  const color = getAccuracyColor(accuracy);
  const label = getAccuracyLabel(accuracy);

  return (
    <div className="accuracy-display">
      <div 
        className="accuracy-circle"
        style={{ 
          background: `conic-gradient(${color} ${accuracy * 3.6}deg, #e0e0e0 0deg)` 
        }}
      >
        <div className="accuracy-inner">
          <div className="accuracy-value">{accuracy}%</div>
          <div className="accuracy-label">{label}</div>
        </div>
      </div>
      
      <div className="accuracy-details">
        <p>Your overall review accuracy across all items.</p>
        <p className="accuracy-tip">
          {accuracy >= 75 
            ? '🎉 Keep up the great work!' 
            : '💪 Practice makes perfect!'}
        </p>
      </div>
    </div>
  );
};

export default AccuracyDisplay;
