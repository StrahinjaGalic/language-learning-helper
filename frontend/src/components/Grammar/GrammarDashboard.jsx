import React, { useState, useEffect } from 'react';
import { getGrammarStats } from '../../services/api';
import './GrammarDashboard.css';

const GrammarDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const data = await getGrammarStats();
      console.log('Grammar stats received:', data);
      setStats(data);
    } catch (error) {
      console.error('Error fetching grammar stats:', error);
      setStats(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="grammar-dashboard-container">
        <div className="loading-spinner">Loading statistics...</div>
      </div>
    );
  }

  if (!stats || !stats.byStatus || !stats.byLevel) {
    return (
      <div className="grammar-dashboard-container">
        <div className="error-message">
          {stats === null ? 'Failed to load statistics. Please check your connection.' : 'No grammar data available yet.'}
        </div>
      </div>
    );
  }

  // Ensure byStatus has all required keys with defaults
  const byStatus = {
    'not-started': stats.byStatus['not-started'] || 0,
    'learning': stats.byStatus['learning'] || 0,
    'reviewing': stats.byStatus['reviewing'] || 0,
    'mastered': stats.byStatus['mastered'] || 0
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'mastered': return '#4caf50';
      case 'reviewing': return '#2196f3';
      case 'learning': return '#ff9800';
      default: return '#999';
    }
  };

  return (
    <div className="grammar-dashboard-container">
      <div className="grammar-dashboard-header">
        <h1>Grammar Dashboard</h1>
        <p className="subtitle">Track your grammar learning progress</p>
      </div>

      <div className="stats-overview">
        <div className="stat-card total">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <span className="stat-value">{stats.total}</span>
            <span className="stat-label">Total Grammar Points</span>
          </div>
        </div>

        <div className="stat-card learning">
          <div className="stat-icon">📖</div>
          <div className="stat-content">
            <span className="stat-value">{byStatus.learning}</span>
            <span className="stat-label">Learning</span>
            <span className="stat-percentage">
              {stats.total > 0 ? ((byStatus.learning / stats.total) * 100).toFixed(1) : '0.0'}%
            </span>
          </div>
        </div>

        <div className="stat-card reviewing">
          <div className="stat-icon">🔄</div>
          <div className="stat-content">
            <span className="stat-value">{byStatus.reviewing}</span>
            <span className="stat-label">Reviewing</span>
            <span className="stat-percentage">
              {stats.total > 0 ? ((byStatus.reviewing / stats.total) * 100).toFixed(1) : '0.0'}%
            </span>
          </div>
        </div>

        <div className="stat-card mastered">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <span className="stat-value">{byStatus.mastered}</span>
            <span className="stat-label">Mastered</span>
            <span className="stat-percentage">
              {stats.total > 0 ? ((byStatus.mastered / stats.total) * 100).toFixed(1) : '0.0'}%
            </span>
          </div>
        </div>
      </div>

      <div className="progress-section">
        <h2>Progress by JLPT Level</h2>
        <div className="jlpt-grid">
          {Object.entries(stats.byLevel).map(([level, count]) => (
            <div key={level} className="jlpt-card">
              <div className="jlpt-level">{level}</div>
              <div className="jlpt-count">{count}</div>
              <div className="jlpt-label">grammar points</div>
            </div>
          ))}
        </div>
      </div>

      {stats.totalReviews > 0 && (
        <div className="review-stats-section">
          <h2>Review Statistics</h2>
          <div className="review-stats-grid">
            <div className="review-stat-card">
              <span className="review-stat-value">{stats.totalReviews}</span>
              <span className="review-stat-label">Total Reviews</span>
            </div>
            {stats.accuracy !== null && (
              <div className="review-stat-card">
                <span className="review-stat-value accuracy">
                  {(stats.accuracy * 100).toFixed(1)}%
                </span>
                <span className="review-stat-label">Accuracy</span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="progress-bars-section">
        <h2>Overall Progress</h2>
        <div className="progress-bar-container">
          <div className="progress-bar-labels">
            <span>Not Started</span>
            <span>Learning</span>
            <span>Reviewing</span>
            <span>Mastered</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-segment not-started"
              style={{ width: `${stats.total > 0 ? (byStatus['not-started'] / stats.total) * 100 : 0}%` }}
            >
              {byStatus['not-started'] > 0 && byStatus['not-started']}
            </div>
            <div
              className="progress-segment learning"
              style={{ width: `${stats.total > 0 ? (byStatus.learning / stats.total) * 100 : 0}%` }}
            >
              {byStatus.learning > 0 && byStatus.learning}
            </div>
            <div
              className="progress-segment reviewing"
              style={{ width: `${stats.total > 0 ? (byStatus.reviewing / stats.total) * 100 : 0}%` }}
            >
              {byStatus.reviewing > 0 && byStatus.reviewing}
            </div>
            <div
              className="progress-segment mastered"
              style={{ width: `${stats.total > 0 ? (byStatus.mastered / stats.total) * 100 : 0}%` }}
            >
              {byStatus.mastered > 0 && byStatus.mastered}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrammarDashboard;
