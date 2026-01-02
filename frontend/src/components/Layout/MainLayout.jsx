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
      navigate('/grammar');
    }
  };

  const isWKStatsActive = location.pathname.startsWith('/wk-stats') || 
                          location.pathname === '/dashboard' ||
                          location.pathname === '/items' ||
                          location.pathname === '/study-lists' ||
                          location.pathname === '/jlpt';

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
