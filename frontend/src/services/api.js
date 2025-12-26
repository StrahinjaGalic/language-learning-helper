import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add userId to all requests if available
api.interceptors.request.use((config) => {
  const userId = localStorage.getItem('wk_userId');
  if (userId) {
    config.headers['x-user-id'] = userId;
  }
  return config;
});

// Auth endpoints
export const validateToken = async (token) => {
  const response = await api.post('/auth/validate-token', { token });
  return response.data;
};

// WaniKani endpoints
export const getProfile = async () => {
  const response = await api.get('/wk/profile');
  return response.data;
};

export const getSummary = async () => {
  const response = await api.get('/wk/summary');
  return response.data;
};

export const getStats = async () => {
  const response = await api.get('/wk/stats');
  return response.data;
};

export const getSnapshots = async (days = 30) => {
  const response = await api.get(`/wk/snapshots?days=${days}`);
  return response.data;
};

export default api;
