import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import MainLayout from './components/Layout/MainLayout';
import WKStatsLayout from './components/Layout/WKStatsLayout';
import GrammarLayout from './components/Layout/GrammarLayout';
import Dashboard from './components/Dashboard/Dashboard';
import ItemBrowserPage from './components/Dashboard/ItemBrowserPage';
import JLPTProgressPage from './components/Dashboard/JLPTProgressPage';
import GrammarDashboard from './components/Grammar/GrammarDashboard';
import GrammarBrowser from './components/Grammar/GrammarBrowser';
import GrammarDetail from './components/Grammar/GrammarDetail';
import GrammarProgress from './components/Grammar/GrammarProgress';
import ReadingLayout from './components/Layout/ReadingLayout';
import ReadingResources, { ReadingSidebar } from './components/Reading/ReadingResources';
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
            userId ? <Navigate to="/wk-stats/dashboard" /> : <Login onLogin={handleLogin} />
          } 
        />
        
        {/* WK Stats routes with nested layout */}
        <Route 
          path="/wk-stats/*" 
          element={
            userId ? (
              <MainLayout onLogout={handleLogout}>
                <WKStatsLayout>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard userId={userId} />} />
                    <Route path="/items" element={<ItemBrowserPage />} />
                    <Route path="/jlpt" element={<JLPTProgressPage />} />
                    <Route path="/" element={<Navigate to="/wk-stats/dashboard" />} />
                  </Routes>
                </WKStatsLayout>
              </MainLayout>
            ) : <Navigate to="/login" />
          } 
        />

        {/* Grammar routes with nested layout */}
        <Route 
          path="/grammar/*" 
          element={
            userId ? (
              <MainLayout onLogout={handleLogout}>
                <GrammarLayout>
                  <Routes>
                    <Route path="/dashboard" element={<GrammarDashboard />} />
                    <Route path="/browse" element={<GrammarBrowser />} />
                    <Route path="/progress" element={<GrammarProgress />} />
                    <Route path="/point/:grammarId" element={<GrammarDetail />} />
                    <Route path="/" element={<Navigate to="/grammar/browse" />} />
                  </Routes>
                </GrammarLayout>
              </MainLayout>
            ) : <Navigate to="/login" />
          } 
        />

        {/* Reading routes with nested layout */}
        <Route 
          path="/reading/*" 
          element={
            userId ? (
              <MainLayout onLogout={handleLogout}>
                <ReadingLayout>
                  <ReadingSidebar />
                  <ReadingResources />
                </ReadingLayout>
              </MainLayout>
            ) : <Navigate to="/login" />
          } 
        />

        {/* Legacy routes for backward compatibility */}
        <Route path="/dashboard" element={<Navigate to="/wk-stats/dashboard" />} />
        <Route path="/items" element={<Navigate to="/wk-stats/items" />} />
        <Route path="/jlpt" element={<Navigate to="/wk-stats/jlpt" />} />
        
        <Route path="/" element={<Navigate to="/wk-stats/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
