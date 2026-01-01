import React, { useState, useEffect } from 'react';
import { getLeeches } from '../../services/api';
import './LeechManager.css';

const LeechManager = () => {
  const [leeches, setLeeches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [threshold, setThreshold] = useState(75);
  const [minReviews, setMinReviews] = useState(5);

  useEffect(() => {
    fetchLeeches();
  }, [threshold, minReviews]);

  const fetchLeeches = async () => {
    try {
      setLoading(true);
      const data = await getLeeches(threshold, minReviews);
      setLeeches(data);
    } catch (error) {
      console.error('Error fetching leeches:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTypeColor = (type) => {
    if (type === 'radical') return 'type-radical';
    if (type === 'kanji') return 'type-kanji';
    if (type === 'vocabulary') return 'type-vocabulary';
    return '';
  };

  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 60) return 'accuracy-medium';
    if (accuracy >= 40) return 'accuracy-low';
    return 'accuracy-critical';
  };

  if (loading) {
    return <div className="leech-loading">Finding your leeches...</div>;
  }

  return (
    <div className="leech-manager">
      <div className="leech-header">
        <div>
          <h2>🐛 Leech Manager</h2>
          <p className="leech-description">
            Items you struggle with most - focus here for maximum improvement!
          </p>
        </div>
        <div className="leech-count-badge">
          {leeches.length} {leeches.length === 1 ? 'leech' : 'leeches'}
        </div>
      </div>

      <div className="leech-filters">
        <div className="filter-group">
          <label>Accuracy Threshold</label>
          <select 
            value={threshold} 
            onChange={(e) => setThreshold(parseInt(e.target.value))}
          >
            <option value="80">Below 80%</option>
            <option value="75">Below 75%</option>
            <option value="70">Below 70%</option>
            <option value="60">Below 60%</option>
            <option value="50">Below 50%</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Minimum Reviews</label>
          <select 
            value={minReviews} 
            onChange={(e) => setMinReviews(parseInt(e.target.value))}
          >
            <option value="3">3+ reviews</option>
            <option value="5">5+ reviews</option>
            <option value="10">10+ reviews</option>
            <option value="20">20+ reviews</option>
          </select>
        </div>
      </div>

      {leeches.length === 0 ? (
        <div className="no-leeches">
          <div className="no-leeches-icon">🎉</div>
          <h3>No leeches found!</h3>
          <p>All your items are above {threshold}% accuracy. Great work!</p>
        </div>
      ) : (
        <div className="leeches-list">
          {leeches.map(leech => (
            <div key={leech.id} className={`leech-card ${getTypeColor(leech.type)}`}>
              <div className="leech-main">
                <div className="leech-character">{leech.characters}</div>
                <div className="leech-info">
                  <div className="leech-meanings">
                    {leech.meanings.slice(0, 2).join(', ')}
                  </div>
                  {leech.readings && leech.readings.length > 0 && (
                    <div className="leech-readings">
                      {leech.readings.slice(0, 2).join(', ')}
                    </div>
                  )}
                  <div className="leech-meta">
                    <span className="leech-level">Level {leech.level}</span>
                    <span className="leech-srs">{leech.srsStageName}</span>
                  </div>
                </div>
              </div>

              <div className="leech-stats">
                <div className={`accuracy-badge ${getAccuracyColor(leech.avgAccuracy)}`}>
                  {leech.avgAccuracy}% accuracy
                </div>
                <div className="leech-details">
                  <div className="detail-row">
                    <span>Meaning:</span>
                    <span className={getAccuracyColor(leech.meaningAccuracy)}>
                      {leech.meaningAccuracy}%
                    </span>
                  </div>
                  {leech.readingAccuracy !== null && (
                    <div className="detail-row">
                      <span>Reading:</span>
                      <span className={getAccuracyColor(leech.readingAccuracy)}>
                        {leech.readingAccuracy}%
                      </span>
                    </div>
                  )}
                  <div className="detail-row">
                    <span>Incorrect:</span>
                    <span className="incorrect-count">{leech.incorrectCount}×</span>
                  </div>
                  <div className="detail-row">
                    <span>Reviews:</span>
                    <span>{leech.totalReviews}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {leeches.length > 0 && (
        <div className="leech-tips">
          <h4>💡 Tips for conquering leeches:</h4>
          <ul>
            <li>Create mnemonics that are personally meaningful to you</li>
            <li>Pay attention to similar-looking kanji and their differences</li>
            <li>Use external resources like jisho.org for additional context</li>
            <li>Review these items more frequently outside of WaniKani</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LeechManager;
