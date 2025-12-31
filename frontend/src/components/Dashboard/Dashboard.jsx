import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile, getStats, getReviewForecast, getStreaks } from '../../services/api';
import ProgressCards from './ProgressCards';
import SRSChart from './SRSChart';
import AccuracyDisplay from './AccuracyDisplay';
import ReviewForecast from './ReviewForecast';
import StudyStreaks from './StudyStreaks';
import './Dashboard.css';

const Dashboard = ({ userId, onLogout }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [streaks, setStreaks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, [userId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');
      
      const [profileData, statsData, forecastData, streaksData] = await Promise.all([
        getProfile(),
        getStats(),
        getReviewForecast(),
        getStreaks()
      ]);

      setProfile(profileData);
      setStats(statsData);
      setForecast(forecastData);
      setStreaks(streaksData);
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
            <button onClick={() => navigate('/items')} className="browse-button">Browse Items</button>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <ProgressCards stats={stats} profile={profile} />
        
        <div className="status-and-accuracy-section">
          <div className="stats-card">
            <h2>Current Status</h2>
            <div className="stats-grid">
              <div className="stat-row">
                <span className="stat-label">Level:</span>
                <span className="stat-value">{profile?.level || 0}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Total Items:</span>
                <span className="stat-value">{stats?.totalItems?.toLocaleString() || 0}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Apprentice:</span>
                <span className="stat-value apprentice-color">{stats?.srs?.apprentice?.toLocaleString() || 0}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Guru:</span>
                <span className="stat-value guru-color">{stats?.srs?.guru?.toLocaleString() || 0}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Master:</span>
                <span className="stat-value master-color">{stats?.srs?.master?.toLocaleString() || 0}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Enlightened:</span>
                <span className="stat-value enlightened-color">{stats?.srs?.enlightened?.toLocaleString() || 0}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Burned:</span>
                <span className="stat-value burned-color">{stats?.srs?.burned?.toLocaleString() || 0}</span>
              </div>
            </div>
          </div>

          <div className="accuracy-circles-section">
          <div className="accuracy-circle-card">
            <h3>Reading Accuracy</h3>
            <AccuracyDisplay accuracy={stats?.accuracyBreakdown?.reading?.accuracy} label="Reading" />
          </div>
          
          <div className="accuracy-circle-card">
            <h3>Meaning Accuracy</h3>
            <AccuracyDisplay accuracy={stats?.accuracyBreakdown?.meaning?.accuracy} label="Meaning" />
          </div>
          
          <div className="accuracy-circle-card">
            <h3>Total Accuracy</h3>
            <AccuracyDisplay accuracy={stats?.accuracyBreakdown?.total?.accuracy} label="Total" />
          </div>
          </div>
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <h2>SRS Distribution</h2>
            <SRSChart srs={stats?.srs} />
          </div>
          
          <div className="chart-card">
            <h2>Review Forecast</h2>
            <ReviewForecast forecast={forecast} />
          </div>
        </div>

        <div className="chart-card full-width">
          <h2>Study Streaks</h2>
          <StudyStreaks streakData={streaks} />
        </div>

        <button onClick={fetchData} className="refresh-button">
          Refresh Data
        </button>
      </main>
    </div>
  );
};

export default Dashboard;
