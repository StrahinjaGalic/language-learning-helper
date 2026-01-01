import React, { useState, useEffect } from 'react';
import { getItems } from '../../services/api';
import './ItemBrowser.css';

const ItemBrowser = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    level: 'all',
    srsStage: 'all',
    minAccuracy: 0,
    leechesOnly: false
  });

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [items, searchTerm, filters]);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await getItems();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...items];

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.characters?.toLowerCase().includes(term) ||
        item.meanings?.some(m => m.toLowerCase().includes(term)) ||
        item.readings?.some(r => r.toLowerCase().includes(term))
      );
    }

    // Type filter
    if (filters.type !== 'all') {
      filtered = filtered.filter(item => item.type === filters.type);
    }

    // Level filter
    if (filters.level !== 'all') {
      filtered = filtered.filter(item => item.level === parseInt(filters.level));
    }

    // SRS Stage filter
    if (filters.srsStage !== 'all') {
      const stage = filters.srsStage;
      if (stage === 'apprentice') {
        filtered = filtered.filter(item => item.srsStage >= 1 && item.srsStage <= 4);
      } else if (stage === 'guru') {
        filtered = filtered.filter(item => item.srsStage >= 5 && item.srsStage <= 6);
      } else if (stage === 'master') {
        filtered = filtered.filter(item => item.srsStage === 7);
      } else if (stage === 'enlightened') {
        filtered = filtered.filter(item => item.srsStage === 8);
      } else if (stage === 'burned') {
        filtered = filtered.filter(item => item.srsStage === 9);
      }
    }

    // Accuracy filter
    if (filters.minAccuracy > 0) {
      filtered = filtered.filter(item => {
        const avgAccuracy = item.readingAccuracy !== null
          ? (item.meaningAccuracy + item.readingAccuracy) / 2
          : item.meaningAccuracy;
        return avgAccuracy >= filters.minAccuracy;
      });
    }

    // Leeches filter
    if (filters.leechesOnly) {
      filtered = filtered.filter(item => {
        const avgAccuracy = item.readingAccuracy !== null
          ? (item.meaningAccuracy + item.readingAccuracy) / 2
          : item.meaningAccuracy;
        return avgAccuracy < 75 && (item.meaningIncorrect + (item.readingIncorrect || 0)) >= 3;
      });
    }

    setFilteredItems(filtered);
  };

  const getSRSColor = (srsStage) => {
    if (srsStage >= 1 && srsStage <= 4) return 'apprentice';
    if (srsStage >= 5 && srsStage <= 6) return 'guru';
    if (srsStage === 7) return 'master';
    if (srsStage === 8) return 'enlightened';
    if (srsStage === 9) return 'burned';
    return '';
  };

  const getTypeColor = (type) => {
    if (type === 'radical') return 'type-radical';
    if (type === 'kanji') return 'type-kanji';
    if (type === 'vocabulary') return 'type-vocabulary';
    return '';
  };

  if (loading) {
    return <div className="item-browser-loading">Loading items... This may take a moment.</div>;
  }

  return (
    <div className="item-browser">
      <div className="browser-header">
        <h2>Browse Your Items</h2>
        <div className="header-actions">
          <button 
            className={`quick-filter-btn ${filters.leechesOnly ? 'active' : ''}`}
            onClick={() => setFilters({...filters, leechesOnly: !filters.leechesOnly})}
          >
            🩹 {filters.leechesOnly ? 'Show All' : 'Show Leeches Only'}
          </button>
          <p className="item-count">{filteredItems.length} of {items.length} items</p>
        </div>
      </div>

      <div className="browser-controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search by kanji, meaning, or reading..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="filters">
          <select 
            value={filters.type} 
            onChange={(e) => setFilters({...filters, type: e.target.value})}
            className="filter-select"
          >
            <option value="all">All Types</option>
            <option value="radical">Radicals</option>
            <option value="kanji">Kanji</option>
            <option value="vocabulary">Vocabulary</option>
          </select>

          <select 
            value={filters.level} 
            onChange={(e) => setFilters({...filters, level: e.target.value})}
            className="filter-select"
          >
            <option value="all">All Levels</option>
            {Array.from({length: 60}, (_, i) => i + 1).map(level => (
              <option key={level} value={level}>Level {level}</option>
            ))}
          </select>

          <select 
            value={filters.srsStage} 
            onChange={(e) => setFilters({...filters, srsStage: e.target.value})}
            className="filter-select"
          >
            <option value="all">All SRS Stages</option>
            <option value="apprentice">Apprentice</option>
            <option value="guru">Guru</option>
            <option value="master">Master</option>
            <option value="enlightened">Enlightened</option>
            <option value="burned">Burned</option>
          </select>

          <select 
            value={filters.minAccuracy} 
            onChange={(e) => setFilters({...filters, minAccuracy: parseInt(e.target.value)})}
            className="filter-select"
          >
            <option value="0">Any Accuracy</option>
            <option value="90">90%+ Accuracy</option>
            <option value="80">80%+ Accuracy</option>
            <option value="70">70%+ Accuracy</option>
            <option value="50">50%+ Accuracy</option>
            <option value="0">Below 50%</option>
          </select>
        </div>
      </div>

      <div className="items-grid">
        {filteredItems.map(item => (
          <div key={item.id} className={`item-card ${getTypeColor(item.type)}`}>
            <div className="item-header">
              <span className={`srs-badge ${getSRSColor(item.srsStage)}`}>
                {item.srsStageName}
              </span>
              <span className="level-badge">Lv {item.level}</span>
            </div>
            
            <div className="item-character">
              {item.characters}
            </div>
            
            <div className="item-meanings">
              {item.meanings.slice(0, 3).join(', ')}
            </div>
            
            {item.readings && item.readings.length > 0 && (
              <div className="item-readings">
                {item.readings.slice(0, 3).join(', ')}
              </div>
            )}
            
            <div className="item-accuracy">
              <div className="accuracy-row">
                <span className="accuracy-label">Meaning:</span>
                <span className={`accuracy-value ${item.meaningAccuracy >= 80 ? 'good' : item.meaningAccuracy >= 60 ? 'ok' : 'bad'}`}>
                  {item.meaningAccuracy}%
                </span>
              </div>
              {item.readingAccuracy !== null && (
                <div className="accuracy-row">
                  <span className="accuracy-label">Reading:</span>
                  <span className={`accuracy-value ${item.readingAccuracy >= 80 ? 'good' : item.readingAccuracy >= 60 ? 'ok' : 'bad'}`}>
                    {item.readingAccuracy}%
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="no-items">
          <p>No items match your filters</p>
        </div>
      )}
    </div>
  );
};

export default ItemBrowser;
