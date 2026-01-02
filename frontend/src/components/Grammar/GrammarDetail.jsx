import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getGrammarPoint, updateGrammarProgress } from '../../services/api';
import './GrammarDetail.css';

const GrammarDetail = () => {
  const { grammarId } = useParams();
  const navigate = useNavigate();
  const [grammar, setGrammar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userNotes, setUserNotes] = useState('');
  const [confidence, setConfidence] = useState(3);

  useEffect(() => {
    fetchGrammarDetail();
  }, [grammarId]);

  const fetchGrammarDetail = async () => {
    try {
      setLoading(true);
      const data = await getGrammarPoint(grammarId);
      setGrammar(data);
      setUserNotes(data.userProgress.notes || '');
      setConfidence(data.userProgress.confidence || 3);
    } catch (error) {
      console.error('Error fetching grammar detail:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    try {
      await updateGrammarProgress(grammarId, {
        status: newStatus,
        confidence,
        notes: userNotes
      });
      await fetchGrammarDetail();
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const handleSaveNotes = async () => {
    try {
      await updateGrammarProgress(grammarId, {
        status: grammar.userProgress.status,
        confidence,
        notes: userNotes
      });
      alert('Notes saved successfully!');
    } catch (error) {
      console.error('Error saving notes:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'mastered': return '#4caf50';
      case 'reviewing': return '#2196f3';
      case 'learning': return '#ff9800';
      default: return '#999';
    }
  };

  if (loading) {
    return (
      <div className="grammar-detail-container">
        <div className="loading-spinner">Loading grammar point...</div>
      </div>
    );
  }

  if (!grammar) {
    return (
      <div className="grammar-detail-container">
        <div className="error-message">Grammar point not found</div>
      </div>
    );
  }

  return (
    <div className="grammar-detail-container">
      <button className="back-button" onClick={() => navigate('/grammar/browse')}>
        ← Back to Browse
      </button>

      <div className="grammar-detail-header">
        <div className="header-main">
          <h1 className="grammar-detail-japanese">{grammar.titleJapanese}</h1>
          <span className="grammar-detail-badge">{grammar.jlptLevel}</span>
        </div>
        <h2 className="grammar-detail-title">{grammar.title}</h2>
        <p className="grammar-detail-category">{grammar.category}</p>
      </div>

      <div className="grammar-detail-content">
        <div className="grammar-section">
          <h3>Structure</h3>
          <div className="structure-box">{grammar.structure}</div>
        </div>

        <div className="grammar-section">
          <h3>Explanation</h3>
          <p className="explanation-text">{grammar.explanation}</p>
        </div>

        <div className="grammar-section">
          <h3>Examples</h3>
          <div className="examples-list">
            {grammar.examples.map((example, index) => (
              <div key={index} className="example-card">
                <div className="example-japanese">{example.japanese}</div>
                <div className="example-reading">{example.reading}</div>
                <div className="example-english">{example.english}</div>
                {example.breakdown && (
                  <div className="example-breakdown">
                    <strong>Breakdown:</strong> {example.breakdown}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {grammar.notes && (
          <div className="grammar-section">
            <h3>Usage Notes</h3>
            <p className="notes-text">{grammar.notes}</p>
          </div>
        )}

        {grammar.relatedGrammar && grammar.relatedGrammar.length > 0 && (
          <div className="grammar-section">
            <h3>Related Grammar</h3>
            <div className="related-grammar-list">
              {grammar.relatedGrammar.map((related, index) => (
                <button
                  key={index}
                  className="related-grammar-button"
                  onClick={() => navigate(`/grammar/point/${related}`)}
                >
                  {related}
                </button>
              ))}
            </div>
          </div>
        )}

        {grammar.resources && grammar.resources.length > 0 && (
          <div className="grammar-section">
            <h3>External Resources</h3>
            <div className="resources-list">
              {grammar.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  {resource.name} →
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="grammar-section progress-section">
          <h3>Your Progress</h3>
          <div className="progress-controls">
            <div className="status-buttons">
              <button
                className={`status-button ${grammar.userProgress.status === 'learning' ? 'active' : ''}`}
                style={{ borderColor: grammar.userProgress.status === 'learning' ? '#ff9800' : '#ddd' }}
                onClick={() => handleStatusUpdate('learning')}
              >
                Learning
              </button>
              <button
                className={`status-button ${grammar.userProgress.status === 'reviewing' ? 'active' : ''}`}
                style={{ borderColor: grammar.userProgress.status === 'reviewing' ? '#2196f3' : '#ddd' }}
                onClick={() => handleStatusUpdate('reviewing')}
              >
                Reviewing
              </button>
              <button
                className={`status-button ${grammar.userProgress.status === 'mastered' ? 'active' : ''}`}
                style={{ borderColor: grammar.userProgress.status === 'mastered' ? '#4caf50' : '#ddd' }}
                onClick={() => handleStatusUpdate('mastered')}
              >
                Mastered
              </button>
            </div>

            <div className="confidence-control">
              <label>Confidence Level: {confidence}</label>
              <input
                type="range"
                min="1"
                max="5"
                value={confidence}
                onChange={(e) => setConfidence(parseInt(e.target.value))}
                className="confidence-slider"
              />
              <div className="confidence-labels">
                <span>1 (Low)</span>
                <span>5 (High)</span>
              </div>
            </div>

            <div className="notes-control">
              <label>Personal Notes</label>
              <textarea
                value={userNotes}
                onChange={(e) => setUserNotes(e.target.value)}
                placeholder="Add your personal notes about this grammar point..."
                className="notes-textarea"
                rows="4"
              />
              <button onClick={handleSaveNotes} className="save-notes-button">
                Save Notes
              </button>
            </div>

            {grammar.userProgress.timesReviewed > 0 && (
              <div className="progress-stats">
                <div className="stat-item">
                  <span className="stat-label">Times Reviewed:</span>
                  <span className="stat-value">{grammar.userProgress.timesReviewed}</span>
                </div>
                {grammar.userProgress.lastReviewed && (
                  <div className="stat-item">
                    <span className="stat-label">Last Reviewed:</span>
                    <span className="stat-value">
                      {new Date(grammar.userProgress.lastReviewed).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrammarDetail;
