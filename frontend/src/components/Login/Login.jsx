import React, { useState } from 'react';
import { validateToken } from '../../services/api';
import './Login.css';

const Login = ({ onLogin }) => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!token.trim()) {
      setError('Please enter your WaniKani API token');
      setLoading(false);
      return;
    }

    try {
      const result = await validateToken(token);
      
      if (result.success) {
        onLogin(result.userId);
      } else {
        setError('Invalid token. Please check and try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.error || 'Failed to validate token. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>WaniKani Stats Dashboard</h1>
        <p className="subtitle">Enter your WaniKani API token to get started</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="token">API Token</label>
            <input
              type="password"
              id="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Your WaniKani API token"
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Validating...' : 'Login'}
          </button>
        </form>

        <div className="help-text">
          <p>Don't have a token? Get one from your <a href="https://www.wanikani.com/settings/personal_access_tokens" target="_blank" rel="noopener noreferrer">WaniKani settings</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
