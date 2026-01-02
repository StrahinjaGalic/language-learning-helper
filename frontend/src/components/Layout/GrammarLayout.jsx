import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './GrammarLayout.css';

const GrammarLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="grammar-layout">
      <aside className="grammar-sidebar">
        <nav className="grammar-sidebar-nav">
          <button
            className={`grammar-sidebar-item ${isActive('/grammar/dashboard') ? 'active' : ''}`}
            onClick={() => navigate('/grammar/dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`grammar-sidebar-item ${isActive('/grammar/browse') ? 'active' : ''}`}
            onClick={() => navigate('/grammar/browse')}
          >
            Browse Grammar
          </button>
          <button
            className={`grammar-sidebar-item ${isActive('/grammar/progress') ? 'active' : ''}`}
            onClick={() => navigate('/grammar/progress')}
          >
            My Progress
          </button>
        </nav>
      </aside>

      <main className="grammar-content">
        {children}
      </main>
    </div>
  );
};

export default GrammarLayout;
