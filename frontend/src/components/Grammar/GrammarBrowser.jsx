import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGrammarPoints } from '../../services/api';
import './GrammarBrowser.css';

const GrammarBrowser = () => {
  const navigate = useNavigate();
  const [grammarPoints, setGrammarPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    jlptLevel: '',
    category: '',
    status: '',
    search: ''
  });

  useEffect(() => {
    fetchGrammarPoints();
  }, [filters.jlptLevel, filters.category]);

  const fetchGrammarPoints = async () => {
    try {
      setLoading(true);
      const data = await getGrammarPoints({
        jlptLevel: filters.jlptLevel,
        category: filters.category,
        search: filters.search
      });
      setGrammarPoints(data);
    } catch (error) {
      console.error('Error fetching grammar points:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchGrammarPoints();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'mastered': return 'status-mastered';
      case 'reviewing': return 'status-reviewing';
      case 'learning': return 'status-learning';
      default: return 'status-not-started';
    }
  };

  const filteredByStatus = filters.status 
    ? grammarPoints.filter(g => g.userProgress.status === filters.status)
    : grammarPoints;

  if (loading) {
    return (
      <div className="grammar-browser-container">
        <div className="loading-spinner">Loading grammar points...</div>
      </div>
    );
  }

  return (
    <div className="grammar-browser-container">
      <div className="grammar-browser-header">
        <h1>Browse Grammar</h1>
        <p className="subtitle">{filteredByStatus.length} grammar points</p>
      </div>

      <div className="grammar-filters">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search grammar..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>

        <div className="filter-group">
          <label>JLPT Level:</label>
          <select 
            value={filters.jlptLevel} 
            onChange={(e) => setFilters({ ...filters, jlptLevel: e.target.value })}
            className="filter-select"
          >
            <option value="">All Levels</option>
            <option value="N5">N5</option>
            <option value="N4">N4</option>
            <option value="N3">N3</option>
            <option value="N2">N2</option>
            <option value="N1">N1</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Category:</label>
          <select 
            value={filters.category} 
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="filter-select"
          >
            <option value="">All Categories</option>
            <option value="particles">Particles</option>
            <option value="verb-conjugation">Verb Conjugation</option>
            <option value="adjectives">Adjectives</option>
            <option value="copula">Copula</option>
            <option value="pronouns">Pronouns</option>
            <option value="expressions">Expressions</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Status:</label>
          <select 
            value={filters.status} 
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="filter-select"
          >
            <option value="">All Status</option>
            <option value="not-started">Not Started</option>
            <option value="learning">Learning</option>
            <option value="reviewing">Reviewing</option>
            <option value="mastered">Mastered</option>
          </select>
        </div>
      </div>

      <div className="grammar-grid">
        {filteredByStatus.map((grammar) => (
          <div
            key={grammar.grammarId}
            className={`grammar-card ${getStatusColor(grammar.userProgress.status)}`}
            onClick={() => navigate(`/grammar/point/${grammar.grammarId}`)}
          >
            <div className="grammar-card-header">
              <span className="grammar-japanese">{grammar.titleJapanese}</span>
              <span className="grammar-level-badge">{grammar.jlptLevel}</span>
            </div>
            <h3 className="grammar-title">{grammar.title}</h3>
            <p className="grammar-structure">{grammar.structure}</p>
            <div className="grammar-card-footer">
              <span className="grammar-category">{grammar.category}</span>
              <span className={`grammar-status ${getStatusColor(grammar.userProgress.status)}`}>
                {grammar.userProgress.status === 'not-started' ? 'New' : 
                 grammar.userProgress.status.charAt(0).toUpperCase() + grammar.userProgress.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredByStatus.length === 0 && (
        <div className="no-results">
          <p>No grammar points found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default GrammarBrowser;
