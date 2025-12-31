import React from 'react';
import './ReviewForecast.css';

const ReviewForecast = ({ forecast }) => {
  if (!forecast || !forecast.length) {
    return (
      <div className="review-forecast-empty">
        <p>No upcoming reviews! 🎉</p>
      </div>
    );
  }

  // Group reviews by day
  const groupByDay = () => {
    const days = {};
    const now = new Date();

    forecast.forEach(item => {
      const date = new Date(item.available_at);
      const dateKey = date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      });
      
      if (!days[dateKey]) {
        days[dateKey] = {
          date: date,
          hours: {},
          total: 0
        };
      }
      
      const hour = date.getHours();
      if (!days[dateKey].hours[hour]) {
        days[dateKey].hours[hour] = 0;
      }
      
      days[dateKey].hours[hour] += item.subject_ids.length;
      days[dateKey].total += item.subject_ids.length;
    });

    return Object.entries(days)
      .sort(([, a], [, b]) => a.date - b.date)
      .slice(0, 7); // Show next 7 days
  };

  // Get next 24 hours breakdown
  const getNext24Hours = () => {
    const now = new Date();
    const next24 = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const hourlyData = {};

    forecast.forEach(item => {
      const date = new Date(item.available_at);
      if (date >= now && date <= next24) {
        const hour = date.getHours();
        const timeLabel = date.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        });
        
        if (!hourlyData[timeLabel]) {
          hourlyData[timeLabel] = {
            count: 0,
            hour: hour,
            date: date
          };
        }
        hourlyData[timeLabel].count += item.subject_ids.length;
      }
    });

    return Object.entries(hourlyData)
      .sort(([, a], [, b]) => a.date - b.date)
      .slice(0, 24);
  };

  const dailyData = groupByDay();
  const hourlyData = getNext24Hours();

  return (
    <div className="review-forecast">
      <div className="forecast-section">
        <h3>Next 24 Hours</h3>
        <div className="hourly-forecast">
          {hourlyData.length > 0 ? (
            hourlyData.map(([time, data]) => (
              <div key={time} className="forecast-hour">
                <span className="forecast-time">{time}</span>
                <div className="forecast-bar-container">
                  <div 
                    className="forecast-bar" 
                    style={{ width: `${Math.min((data.count / 100) * 100, 100)}%` }}
                  />
                </div>
                <span className="forecast-count">{data.count}</span>
              </div>
            ))
          ) : (
            <p className="no-reviews-message">No reviews in the next 24 hours</p>
          )}
        </div>
      </div>

      <div className="forecast-section">
        <h3>Next 7 Days</h3>
        <div className="daily-forecast">
          {dailyData.map(([day, data]) => {
            const isToday = new Date().toDateString() === data.date.toDateString();
            const isTomorrow = new Date(Date.now() + 86400000).toDateString() === data.date.toDateString();
            
            let dayLabel = day;
            if (isToday) dayLabel = 'Today';
            else if (isTomorrow) dayLabel = 'Tomorrow';

            return (
              <div key={day} className="forecast-day">
                <div className="forecast-day-header">
                  <span className="forecast-day-label">{dayLabel}</span>
                  <span className="forecast-day-total">{data.total} reviews</span>
                </div>
                <div className="forecast-day-bar">
                  <div 
                    className="forecast-day-fill" 
                    style={{ width: `${Math.min((data.total / 200) * 100, 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewForecast;
