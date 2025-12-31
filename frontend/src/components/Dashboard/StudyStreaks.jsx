import React from 'react';
import './StudyStreaks.css';

const StudyStreaks = ({ streakData }) => {
  if (!streakData) {
    return <div className="streaks-loading">Loading streaks...</div>;
  }

  const { currentStreak, longestStreak, activityMap } = streakData;

  // Generate calendar data for last 90 days
  const generateCalendarData = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 89; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      
      const dateKey = date.toISOString().split('T')[0];
      const count = activityMap[dateKey] || 0;
      
      days.push({
        date: date,
        dateKey: dateKey,
        count: count,
        dayOfWeek: date.getDay(),
        weekOfYear: Math.floor(i / 7)
      });
    }
    
    return days;
  };

  const calendarData = generateCalendarData();
  
  // Group by weeks
  const weeks = [];
  for (let i = 0; i < 13; i++) {
    weeks.push(calendarData.filter(d => d.weekOfYear === i));
  }

  // Get intensity level for color
  const getIntensityLevel = (count) => {
    if (count === 0) return 'level-0';
    if (count < 10) return 'level-1';
    if (count < 25) return 'level-2';
    if (count < 50) return 'level-3';
    return 'level-4';
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="study-streaks">
      <div className="streak-stats">
        <div className="streak-stat">
          <div className="streak-icon">🔥</div>
          <div className="streak-info">
            <div className="streak-value">{currentStreak}</div>
            <div className="streak-label">Current Streak</div>
          </div>
        </div>
        
        <div className="streak-stat">
          <div className="streak-icon">⭐</div>
          <div className="streak-info">
            <div className="streak-value">{longestStreak}</div>
            <div className="streak-label">Longest Streak</div>
          </div>
        </div>
      </div>

      <div className="heatmap-container">
        <h4>Last 90 Days Activity</h4>
        <div className="heatmap">
          <div className="heatmap-labels">
            <div className="day-label">Mon</div>
            <div className="day-label">Wed</div>
            <div className="day-label">Fri</div>
          </div>
          
          <div className="heatmap-grid">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="heatmap-week">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const day = week.find(d => d.dayOfWeek === dayIndex);
                  
                  if (!day) {
                    return <div key={dayIndex} className="heatmap-day empty" />;
                  }
                  
                  return (
                    <div
                      key={dayIndex}
                      className={`heatmap-day ${getIntensityLevel(day.count)}`}
                      title={`${formatDate(day.date)}: ${day.count} reviews`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        
        <div className="heatmap-legend">
          <span className="legend-label">Less</span>
          <div className="legend-colors">
            <div className="legend-box level-0" />
            <div className="legend-box level-1" />
            <div className="legend-box level-2" />
            <div className="legend-box level-3" />
            <div className="legend-box level-4" />
          </div>
          <span className="legend-label">More</span>
        </div>
      </div>
    </div>
  );
};

export default StudyStreaks;
