import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGrammarPoints } from '../../services/api';
import './GrammarBrowser.css';

const GrammarBrowser = () => {
  const navigate = useNavigate();
  const [grammarPoints, setGrammarPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('sections'); // 'grid' or 'sections'
  const [filters, setFilters] = useState({
    jlptLevel: '',
    category: '',
    status: '',
    search: '',
    section: ''
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

  const filteredBySection = filters.section
    ? filteredByStatus.filter(g => g.taeKimSection === filters.section)
    : filteredByStatus;

  // Group by section for section view
  const groupedBySection = filteredBySection.reduce((acc, grammar) => {
    const section = grammar.taeKimSection || 'Other';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(grammar);
    return acc;
  }, {});

  // Get unique sections for filter dropdown
  const uniqueSections = [...new Set(grammarPoints.map(g => g.taeKimSection))].filter(Boolean).sort();

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
        <p className="subtitle">{filteredBySection.length} grammar points</p>
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
          <label>View:</label>
          <select 
            value={viewMode} 
            onChange={(e) => setViewMode(e.target.value)}
            className="filter-select"
          >
            <option value="sections">By Section</option>
            <option value="grid">All (Grid)</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Section:</label>
          <select 
            value={filters.section} 
            onChange={(e) => setFilters({ ...filters, section: e.target.value })}
            className="filter-select"
          >
            <option value="">All Sections</option>
            {uniqueSections.map(section => (
              <option key={section} value={section}>{section}</option>
            ))}
          </select>
        </div>

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

      {viewMode === 'sections' ? (
        <div className="grammar-sections">
          {Object.entries(groupedBySection).sort(([a], [b]) => {
            // Natural sort for section numbers (e.g., 3.1, 3.2, 3.10, 3.11)
            const parseSection = (str) => {
              const match = str.match(/^(\d+)\.(\d+)/);
              return match ? [parseInt(match[1]), parseInt(match[2])] : [Infinity, Infinity];
            };
            const [aMajor, aMinor] = parseSection(a);
            const [bMajor, bMinor] = parseSection(b);
            return aMajor !== bMajor ? aMajor - bMajor : aMinor - bMinor;
          }).map(([section, points]) => (
            <div key={section} className="grammar-section">
              <h2 className="section-title">{section}</h2>
              <div className="grammar-grid">
                {points.sort((a, b) => (a.taeKimOrder || 0) - (b.taeKimOrder || 0)).map((grammar) => (
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
            </div>
          ))}
        </div>
      ) : (
        <div className="grammar-grid">
          {filteredBySection.map((grammar) => (
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
      )}

      {filteredBySection.length === 0 && (
        <div className="no-results">
          <p>No grammar points found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default GrammarBrowser;
