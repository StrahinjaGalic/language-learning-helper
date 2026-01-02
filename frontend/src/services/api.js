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

export const getReviewForecast = async () => {
  const response = await api.get('/wk/review-forecast');
  return response.data;
};

export const getStreaks = async () => {
  const response = await api.get('/wk/streaks');
  return response.data;
};

export const getItems = async () => {
  const response = await api.get('/wk/items');
  return response.data;
};

export const getLeeches = async (threshold = 75, minReviews = 5) => {
  const response = await api.get(`/wk/leeches?threshold=${threshold}&minReviews=${minReviews}`);
  return response.data;
};

export const getLevelProgress = async () => {
  const response = await api.get('/wk/level-progress');
  return response.data;
};

export const getStudyLists = async () => {
  const response = await api.get('/wk/study-lists');
  return response.data;
};

export const createStudyList = async (name, description, itemIds, category) => {
  const response = await api.post('/wk/study-lists', { name, description, itemIds, category });
  return response.data;
};

export const updateStudyList = async (id, name, description, itemIds, category) => {
  const response = await api.put(`/wk/study-lists/${id}`, { name, description, itemIds, category });
  return response.data;
};

export const deleteStudyList = async (id) => {
  const response = await api.delete(`/wk/study-lists/${id}`);
  return response.data;
};

export const getStudyListItems = async (id) => {
  const response = await api.get(`/wk/study-lists/${id}/items`);
  return response.data;
};

export const getAllKanji = async () => {
  const response = await api.get('/wk/all-kanji');
  return response.data;
};

// Grammar endpoints
export const getGrammarPoints = async (filters = {}) => {
  const params = new URLSearchParams();
  if (filters.jlptLevel) params.append('jlptLevel', filters.jlptLevel);
  if (filters.category) params.append('category', filters.category);
  if (filters.search) params.append('search', filters.search);
  
  const response = await api.get(`/grammar?${params.toString()}`);
  return response.data;
};

export const getGrammarPoint = async (grammarId) => {
  const response = await api.get(`/grammar/${grammarId}`);
  return response.data;
};

export const getGrammarStats = async () => {
  const response = await api.get('/grammar/stats/overview');
  return response.data;
};

export const updateGrammarProgress = async (grammarId, data) => {
  const response = await api.put(`/grammar/progress/${grammarId}`, data);
  return response.data;
};

export const getUserGrammarProgress = async () => {
  const response = await api.get('/grammar/progress/all');
  return response.data;
};

export default api;
