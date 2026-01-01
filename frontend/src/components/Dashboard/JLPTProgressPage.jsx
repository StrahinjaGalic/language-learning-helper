import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItems } from '../../services/api';
import { JLPT_KANJI } from '../../data/jlptKanji';
import './JLPTProgressPage.css';

const JLPTProgressPage = ({ onLogout }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedLevels, setExpandedLevels] = useState(['N5', 'N4']);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await getItems();
      setItems(data.filter(item => item.type === 'kanji'));
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleLevel = (level) => {
    setExpandedLevels(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const getSRSColor = (srsStage) => {
    if (srsStage >= 1 && srsStage <= 4) return 'apprentice';
    if (srsStage >= 5 && srsStage <= 6) return 'guru';
    if (srsStage === 7) return 'master';
    if (srsStage === 8) return 'enlightened';
    if (srsStage === 9) return 'burned';
    return 'locked';
  };

  const getLevelStats = (level) => {
    const levelKanji = JLPT_KANJI[level];
    const learnedKanji = items.filter(item => 
      levelKanji.includes(item.characters)
    );
    
    return {
      total: levelKanji.length,
      learned: learnedKanji.length,
      percentage: Math.round((learnedKanji.length / levelKanji.length) * 100)
    };
  };

  const getKanjiStatus = (kanji) => {
    const item = items.find(i => i.characters === kanji);
    return item ? {
      learned: true,
      srsStage: item.srsStage,
      srsStageName: item.srsStageName,
      level: item.level
    } : {
      learned: false
    };
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading-spinner">Loading JLPT progress...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>JLPT Kanji Progress</h1>
          <div className="header-actions">
            <button onClick={() => navigate('/dashboard')} className="nav-button">
              Dashboard
            </button>
            <button onClick={() => navigate('/items')} className="nav-button">
              Browse Items
            </button>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </div>
        </div>
      </header>

      <main className="jlpt-main">
        {['N5', 'N4', 'N3', 'N2', 'N1'].map(level => {
          const stats = getLevelStats(level);
          const isExpanded = expandedLevels.includes(level);
          const levelClass = level.toLowerCase();

          return (
            <div key={level} className={`jlpt-level-section ${levelClass}`}>
              <div 
                className="jlpt-level-header" 
                onClick={() => toggleLevel(level)}
              >
                <div className="level-info">
                  <h2>{level}</h2>
                  <span className="level-count">
                    {stats.learned} of {stats.total} shown
                  </span>
                </div>
                <div className="level-progress">
                  <div className="progress-bar-wrapper">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${stats.percentage}%` }}
                    />
                  </div>
                  <span className="percentage">{stats.percentage}%</span>
                  <span className="expand-icon">{isExpanded ? '▼' : '▶'}</span>
                </div>
              </div>

              {isExpanded && (
                <div className="kanji-grid">
                  {JLPT_KANJI[level].map(kanji => {
                    const status = getKanjiStatus(kanji);
                    return (
                      <div
                        key={kanji}
                        className={`kanji-cell ${status.learned ? getSRSColor(status.srsStage) : 'locked'}`}
                        title={status.learned ? `${kanji} - ${status.srsStageName} (Lv${status.level})` : `${kanji} - Not learned`}
                      >
                        {kanji}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default JLPTProgressPage;
