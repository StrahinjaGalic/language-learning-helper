import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = ({ onLogout, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('wk-stats');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'wk-stats') {
      navigate('/wk-stats/dashboard');
    } else if (tab === 'grammar') {
      navigate('/grammar/browse');
    } else if (tab === 'reading') {
      navigate('/reading/resources');
    }
  };

  const isWKStatsActive = location.pathname.startsWith('/wk-stats') || 
                          location.pathname === '/dashboard' ||
                          location.pathname === '/items' ||
                          location.pathname === '/study-lists' ||
                          location.pathname === '/jlpt';

  const isGrammarActive = location.pathname.startsWith('/grammar');
  const isReadingActive = location.pathname.startsWith('/reading');

  return (
    <div className="main-layout">
      <header className="top-navigation">
        <div className="nav-tabs">
          <button
            className={`nav-tab ${isWKStatsActive ? 'active' : ''}`}
            onClick={() => handleTabChange('wk-stats')}
          >
            WK Stats
          </button>
          <button
            className={`nav-tab ${isGrammarActive ? 'active' : ''}`}
            onClick={() => handleTabChange('grammar')}
          >
            Grammar
          </button>
          <button
            className={`nav-tab ${isReadingActive ? 'active' : ''}`}
            onClick={() => handleTabChange('reading')}
          >
            Reading
          </button>
        </div>
        <button onClick={onLogout} className="logout-button">Logout</button>
      </header>

      <div className="layout-content">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
