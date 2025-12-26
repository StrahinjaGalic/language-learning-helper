import React, { useState, useEffect } from 'react';
import { getProfile, getStats, getSnapshots } from '../../services/api';
import ProgressCards from './ProgressCards';
import ReviewChart from './ReviewChart';
import SRSChart from './SRSChart';
import AccuracyDisplay from './AccuracyDisplay';
import './Dashboard.css';

const Dashboard = ({ userId, onLogout }) => {
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);
  const [snapshots, setSnapshots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, [userId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');
      
      const [profileData, statsData, snapshotsData] = await Promise.all([
        getProfile(),
        getStats(),
        getSnapshots(30)
      ]);

      setProfile(profileData);
      setStats(statsData);
      setSnapshots(snapshotsData);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load dashboard data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading-spinner">Loading your statistics...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error-box">
          <p>{error}</p>
          <button onClick={fetchData} className="retry-button">Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>WaniKani Statistics</h1>
          <div className="user-info">
            <span className="username">{profile?.username}</span>
            <span className="level">Level {profile?.level}</span>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <ProgressCards stats={stats} profile={profile} />
        
        <div className="charts-grid">
          <div className="chart-card">
            <h2>Review Activity (Last 30 Days)</h2>
            <ReviewChart snapshots={snapshots} />
          </div>

          <div className="chart-card">
            <h2>SRS Distribution</h2>
            <SRSChart srs={stats?.srs} />
          </div>

          <div className="chart-card">
            <h2>Overall Accuracy</h2>
            <AccuracyDisplay accuracy={stats?.accuracy} />
          </div>
        </div>

        <button onClick={fetchData} className="refresh-button">
          Refresh Data
        </button>
      </main>
    </div>
  );
};

export default Dashboard;
