import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItems, getAllKanji } from '../../services/api';
import { JLPT_KANJI } from '../../data/jlptKanji';
import './JLPTProgressPage.css';
import './PageContainer.css';

const JLPTProgressPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [allKanjiMap, setAllKanjiMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [expandedLevels, setExpandedLevels] = useState(['N5', 'N4']);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Fetch learned items
      const itemsData = await getItems();
      setItems(itemsData.filter(item => item.type === 'kanji'));
      
      // Fetch all WaniKani kanji data for tooltips
      const allKanji = await getAllKanji();
      const kanjiMap = {};
      allKanji.forEach(k => {
        kanjiMap[k.character] = k;
      });
      setAllKanjiMap(kanjiMap);
    } catch (error) {
      console.error('Error fetching data:', error);
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
    <div className="page-container">
      <div className="jlpt-main">
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
                    const item = items.find(i => i.characters === kanji);
                    const kanjiData = allKanjiMap[kanji];
                    
                    return (
                      <div
                        key={kanji}
                        className={`kanji-cell ${status.learned ? getSRSColor(status.srsStage) : 'locked'}`}
                      >
                        {kanji}
                        {status.learned && item ? (
                          <div className="kanji-tooltip">
                            <div className="tooltip-character">{kanji}</div>
                            <div className="tooltip-meanings">
                              {item.meanings.slice(0, 3).join(', ')}
                            </div>
                            {item.readings && item.readings.length > 0 && (
                              <div className="tooltip-readings">
                                {item.readings.slice(0, 3).join(', ')}
                              </div>
                            )}
                            <div className="tooltip-meta">
                              <span className="tooltip-srs">{status.srsStageName}</span>
                              <span className="tooltip-level">WK Lv{status.level}</span>
                            </div>
                          </div>
                        ) : kanjiData ? (
                          <div className="kanji-tooltip">
                            <div className="tooltip-character">{kanji}</div>
                            <div className="tooltip-meanings">
                              {kanjiData.meanings.slice(0, 3).join(', ')}
                            </div>
                            {kanjiData.readings && kanjiData.readings.length > 0 && (
                              <div className="tooltip-readings">
                                {kanjiData.readings.slice(0, 3).join(', ')}
                              </div>
                            )}
                            <div className="tooltip-meta">
                              <span className="tooltip-level">WK Lv{kanjiData.level}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="kanji-tooltip">
                            <div className="tooltip-character">{kanji}</div>
                            <div className="tooltip-locked">Not in WaniKani</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JLPTProgressPage;
