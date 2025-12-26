import axios from 'axios';

const WANIKANI_BASE_URL = 'https://api.wanikani.com/v2';

// Rate limiting: WaniKani allows 60 requests/minute
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 1000; // 1 second between requests

const rateLimitedRequest = async (url, token) => {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    await delay(MIN_REQUEST_INTERVAL - timeSinceLastRequest);
  }
  
  lastRequestTime = Date.now();
  
  return axios.get(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Wanikani-Revision': '20170710'
    }
  });
};

export const validateToken = async (token) => {
  try {
    const response = await rateLimitedRequest(`${WANIKANI_BASE_URL}/user`, token);
    return {
      valid: true,
      user: response.data.data
    };
  } catch (error) {
    if (error.response?.status === 401) {
      return { valid: false, error: 'Invalid token' };
    }
    throw error;
  }
};

export const getUserProfile = async (token) => {
  try {
    const response = await rateLimitedRequest(`${WANIKANI_BASE_URL}/user`, token);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching user profile:', error.message);
    throw new Error('Failed to fetch user profile');
  }
};

export const getSummary = async (token) => {
  try {
    const response = await rateLimitedRequest(`${WANIKANI_BASE_URL}/summary`, token);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching summary:', error.message);
    throw new Error('Failed to fetch summary');
  }
};

export const getAssignments = async (token) => {
  try {
    const response = await rateLimitedRequest(`${WANIKANI_BASE_URL}/assignments`, token);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching assignments:', error.message);
    throw new Error('Failed to fetch assignments');
  }
};

export const getReviewStatistics = async (token) => {
  try {
    const response = await rateLimitedRequest(`${WANIKANI_BASE_URL}/review_statistics`, token);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching review statistics:', error.message);
    throw new Error('Failed to fetch review statistics');
  }
};

export const calculateStats = (assignments, reviewStats) => {
  const srs = {
    apprentice: 0,
    guru: 0,
    master: 0,
    enlightened: 0,
    burned: 0
  };

  let totalReviews = 0;
  let correctReviews = 0;

  // Calculate SRS distribution from assignments
  assignments.forEach(assignment => {
    const stage = assignment.srs_stage;
    if (stage >= 1 && stage <= 4) srs.apprentice++;
    else if (stage >= 5 && stage <= 6) srs.guru++;
    else if (stage === 7) srs.master++;
    else if (stage === 8) srs.enlightened++;
    else if (stage === 9) srs.burned++;
  });

  // Calculate accuracy from review statistics
  reviewStats.forEach(stat => {
    const meaningCorrect = stat.meaning_correct || 0;
    const meaningIncorrect = stat.meaning_incorrect || 0;
    const readingCorrect = stat.reading_correct || 0;
    const readingIncorrect = stat.reading_incorrect || 0;

    correctReviews += meaningCorrect + readingCorrect;
    totalReviews += meaningCorrect + meaningIncorrect + readingCorrect + readingIncorrect;
  });

  const accuracy = totalReviews > 0 ? Math.round((correctReviews / totalReviews) * 100) : 0;

  return {
    srs,
    accuracy,
    totalItems: assignments.length,
    reviewCount: totalReviews
  };
};
