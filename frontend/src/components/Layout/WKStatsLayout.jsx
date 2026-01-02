import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './WKStatsLayout.css';

const WKStatsLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="wk-stats-layout">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <button
            className={`sidebar-item ${isActive('/wk-stats/dashboard') || isActive('/dashboard') ? 'active' : ''}`}
            onClick={() => navigate('/wk-stats/dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`sidebar-item ${isActive('/wk-stats/items') || isActive('/items') ? 'active' : ''}`}
            onClick={() => navigate('/wk-stats/items')}
          >
            Search Items
          </button>
          <button
            className={`sidebar-item ${isActive('/wk-stats/jlpt') || isActive('/jlpt') ? 'active' : ''}`}
            onClick={() => navigate('/wk-stats/jlpt')}
          >
            JLPT
          </button>
        </nav>
      </aside>

      <main className="wk-stats-content">
        {children}
      </main>
    </div>
  );
};

export default WKStatsLayout;
