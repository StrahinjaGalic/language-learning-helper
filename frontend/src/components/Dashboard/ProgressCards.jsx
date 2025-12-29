import React from 'react';
import './ProgressCards.css';

const ProgressCards = ({ stats, profile }) => {
  // Calculate days since started
  const calculateDaysSince = (startDate) => {
    if (!startDate) return 0;
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysSinceStart = calculateDaysSince(profile?.started_at);

  const cards = [
    {
      title: 'Current Level',
      value: profile?.level || 0,
      color: '#667eea',
      icon: '📊'
    },
    {
      title: 'Days Active',
      value: daysSinceStart,
      color: '#f093fb',
      icon: '📅'
    },
    {
      title: 'Burned Items',
      value: stats?.srs?.burned || 0,
      color: '#4facfe',
      icon: '🔥'
    },
    {
      title: 'Lifetime Reviews',
      value: stats?.reviewCount || 0,
      color: '#43e97b',
      icon: '✅'
    }
  ];

  return (
    <div className="progress-cards">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="progress-card"
          style={{ borderLeft: `4px solid ${card.color}` }}
        >
          <div className="card-icon">{card.icon}</div>
          <div className="card-content">
            <p className="card-title">{card.title}</p>
            <p className="card-value">{card.value.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressCards;
