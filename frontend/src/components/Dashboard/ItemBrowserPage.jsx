import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemBrowser from './ItemBrowser';
import './ItemBrowserPage.css';

const ItemBrowserPage = ({ onLogout, profile }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>WaniKani Item Browser</h1>
          <div className="header-actions">
            <button onClick={() => navigate('/dashboard')} className="nav-button">
              Back to Dashboard
            </button>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <ItemBrowser />
      </main>
    </div>
  );
};

export default ItemBrowserPage;
