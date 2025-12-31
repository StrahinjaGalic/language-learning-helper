import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ItemBrowserPage from './components/Dashboard/ItemBrowserPage';
import './App.css';

function App() {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUserId = localStorage.getItem('wk_userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
    setLoading(false);
  }, []);

  const handleLogin = (userId) => {
    localStorage.setItem('wk_userId', userId);
    setUserId(userId);
  };

  const handleLogout = () => {
    localStorage.removeItem('wk_userId');
    setUserId(null);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            userId ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            userId ? <Dashboard userId={userId} onLogout={handleLogout} /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/items" 
          element={
            userId ? <ItemBrowserPage onLogout={handleLogout} /> : <Navigate to="/login" />
          } 
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
