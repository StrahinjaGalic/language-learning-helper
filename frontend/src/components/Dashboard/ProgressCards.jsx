import React from 'react';
import './ProgressCards.css';

const ProgressCards = ({ stats, profile }) => {
  const cards = [
    {
      title: 'Current Level',
      value: profile?.level || 0,
      color: '#667eea',
      icon: '📊'
    },
    {
      title: 'Total Items',
      value: stats?.totalItems || 0,
      color: '#f093fb',
      icon: '📚'
    },
    {
      title: 'Burned Items',
      value: stats?.srs?.burned || 0,
      color: '#4facfe',
      icon: '🔥'
    },
    {
      title: 'Total Reviews',
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
