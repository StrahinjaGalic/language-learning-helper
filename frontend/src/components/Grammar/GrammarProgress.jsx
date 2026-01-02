import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserGrammarProgress } from '../../services/api';
import './GrammarProgress.css';

const GrammarProgress = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      setLoading(true);
      const data = await getUserGrammarProgress();
      setProgress(data);
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'mastered': return 'status-mastered';
      case 'reviewing': return 'status-reviewing';
      case 'learning': return 'status-learning';
      default: return 'status-not-started';
    }
  };

  const filteredProgress = filter === 'all' 
    ? progress 
    : progress.filter(p => p.status === filter);

  if (loading) {
    return (
      <div className="grammar-progress-container">
        <div className="loading-spinner">Loading your progress...</div>
      </div>
    );
  }

  return (
    <div className="grammar-progress-container">
      <div className="grammar-progress-header">
        <h1>My Progress</h1>
        <p className="subtitle">{progress.length} grammar points tracked</p>
      </div>

      <div className="progress-filters">
        <button
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({progress.length})
        </button>
        <button
          className={`filter-button ${filter === 'learning' ? 'active' : ''}`}
          onClick={() => setFilter('learning')}
        >
          Learning ({progress.filter(p => p.status === 'learning').length})
        </button>
        <button
          className={`filter-button ${filter === 'reviewing' ? 'active' : ''}`}
          onClick={() => setFilter('reviewing')}
        >
          Reviewing ({progress.filter(p => p.status === 'reviewing').length})
        </button>
        <button
          className={`filter-button ${filter === 'mastered' ? 'active' : ''}`}
          onClick={() => setFilter('mastered')}
        >
          Mastered ({progress.filter(p => p.status === 'mastered').length})
        </button>
      </div>

      <div className="progress-list">
        {filteredProgress.map((item) => (
          <div
            key={item.grammarId}
            className={`progress-item ${getStatusColor(item.status)}`}
            onClick={() => navigate(`/grammar/point/${item.grammarId}`)}
          >
            <div className="progress-item-header">
              <h3 className="progress-item-title">{item.grammarId}</h3>
              <span className={`progress-status-badge ${getStatusColor(item.status)}`}>
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </span>
            </div>

            <div className="progress-item-stats">
              <div className="stat">
                <span className="stat-label">Confidence:</span>
                <div className="confidence-bars">
                  {[1, 2, 3, 4, 5].map(level => (
                    <div
                      key={level}
                      className={`confidence-bar ${level <= item.confidence ? 'filled' : ''}`}
                    />
                  ))}
                </div>
              </div>

              {item.timesReviewed > 0 && (
                <>
                  <div className="stat">
                    <span className="stat-label">Reviews:</span>
                    <span className="stat-value">{item.timesReviewed}</span>
                  </div>

                  {item.lastReviewed && (
                    <div className="stat">
                      <span className="stat-label">Last Reviewed:</span>
                      <span className="stat-value">
                        {new Date(item.lastReviewed).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>

            {item.notes && (
              <div className="progress-item-notes">
                <strong>Notes:</strong> {item.notes.substring(0, 100)}
                {item.notes.length > 100 && '...'}
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredProgress.length === 0 && (
        <div className="no-progress">
          <p>No progress tracked yet. Start browsing grammar points!</p>
          <button onClick={() => navigate('/grammar/browse')} className="browse-button">
            Browse Grammar
          </button>
        </div>
      )}
    </div>
  );
};

export default GrammarProgress;
