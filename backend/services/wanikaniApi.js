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
    let allAssignments = [];
    let nextUrl = `${WANIKANI_BASE_URL}/assignments`;
    
    while (nextUrl) {
      const response = await rateLimitedRequest(nextUrl, token);
      allAssignments = allAssignments.concat(response.data.data);
      nextUrl = response.data.pages.next_url;
      
      console.log(`Fetched ${allAssignments.length} assignments so far...`);
      
      // Safety limit to prevent infinite loops
      if (allAssignments.length > 10000) break;
    }
    
    console.log(`Total assignments fetched: ${allAssignments.length}`);
    return allAssignments;
  } catch (error) {
    console.error('Error fetching assignments:', error.message);
    throw new Error('Failed to fetch assignments');
  }
};

export const getReviewStatistics = async (token) => {
  try {
    let allStats = [];
    let nextUrl = `${WANIKANI_BASE_URL}/review_statistics`;
    
    while (nextUrl) {
      const response = await rateLimitedRequest(nextUrl, token);
      allStats = allStats.concat(response.data.data);
      nextUrl = response.data.pages.next_url;
      
      console.log(`Fetched ${allStats.length} review statistics so far...`);
      
      // Safety limit
      if (allStats.length > 10000) break;
    }
    
    console.log(`Total review statistics fetched: ${allStats.length}`);
    return allStats;
  } catch (error) {
    console.error('Error fetching review statistics:', error.message);
    throw new Error('Failed to fetch review statistics');
  }
};

export const getReviews = async (token, updatedAfter = null) => {
  try {
    let allReviews = [];
    let url = `${WANIKANI_BASE_URL}/reviews`;
    if (updatedAfter) {
      url += `?updated_after=${updatedAfter}`;
    }
    
    let nextUrl = url;
    
    while (nextUrl) {
      const response = await rateLimitedRequest(nextUrl, token);
      allReviews = allReviews.concat(response.data.data);
      nextUrl = response.data.pages.next_url;
      
      console.log(`Fetched ${allReviews.length} reviews so far...`);
      
      // For reviews, limit to recent ones (last 1000 reviews should be enough for daily count)
      if (allReviews.length > 1000) break;
    }
    
    console.log(`Total reviews fetched: ${allReviews.length}`);
    return allReviews;
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    throw new Error('Failed to fetch reviews');
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
  
  let meaningTotal = 0;
  let meaningCorrect = 0;
  let readingTotal = 0;
  let readingCorrect = 0;

  console.log(`Processing ${assignments.length} assignments`);
  console.log(`Processing ${reviewStats.length} review statistics`);

  // Calculate SRS distribution from assignments
  // Only count started assignments (srs_stage > 0)
  const activeAssignments = assignments.filter(a => a.data && a.data.srs_stage > 0);
  
  console.log(`Active assignments: ${activeAssignments.length}`);

  activeAssignments.forEach(assignment => {
    const stage = assignment.data.srs_stage;
    if (stage >= 1 && stage <= 4) srs.apprentice++;
    else if (stage >= 5 && stage <= 6) srs.guru++;
    else if (stage === 7) srs.master++;
    else if (stage === 8) srs.enlightened++;
    else if (stage === 9) srs.burned++;
  });

  console.log('SRS Distribution:', srs);

  // Calculate accuracy from review statistics
  reviewStats.forEach(stat => {
    const data = stat.data || stat;
    const mCorrect = data.meaning_correct || 0;
    const mIncorrect = data.meaning_incorrect || 0;
    const rCorrect = data.reading_correct || 0;
    const rIncorrect = data.reading_incorrect || 0;

    meaningCorrect += mCorrect;
    meaningTotal += mCorrect + mIncorrect;
    
    readingCorrect += rCorrect;
    readingTotal += rCorrect + rIncorrect;
    
    correctReviews += mCorrect + rCorrect;
    totalReviews += mCorrect + mIncorrect + rCorrect + rIncorrect;
  });

  const totalAccuracy = totalReviews > 0 ? Math.round((correctReviews / totalReviews) * 100) : 0;
  const meaningAccuracy = meaningTotal > 0 ? Math.round((meaningCorrect / meaningTotal) * 100) : 0;
  const readingAccuracy = readingTotal > 0 ? Math.round((readingCorrect / readingTotal) * 100) : 0;

  console.log(`Total reviews: ${totalReviews}, Accuracy: ${totalAccuracy}%`);
  console.log(`Meaning: ${meaningAccuracy}%, Reading: ${readingAccuracy}%`);

  return {
    srs,
    accuracy: totalAccuracy,
    accuracyBreakdown: {
      reading: {
        accuracy: readingAccuracy,
        total: readingTotal,
        correct: readingCorrect
      },
      meaning: {
        accuracy: meaningAccuracy,
        total: meaningTotal,
        correct: meaningCorrect
      },
      total: {
        accuracy: totalAccuracy,
        total: totalReviews,
        correct: correctReviews
      }
    },
    totalItems: activeAssignments.length,
    reviewCount: totalReviews
  };
};

export const calculateDailyReviewCount = (reviews) => {
  // Count reviews done today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  console.log(`Total reviews to process: ${reviews.length}`);
  
  // Check structure of first review
  if (reviews.length > 0) {
    console.log('Sample review structure:', JSON.stringify(reviews[0], null, 2));
  }
  
  const todayReviews = reviews.filter(review => {
    const data = review.data || review;
    const createdAt = data.created_at || data.data_updated_at;
    
    if (!createdAt) {
      console.log('Warning: Review without date', review);
      return false;
    }
    
    const reviewDate = new Date(createdAt);
    reviewDate.setHours(0, 0, 0, 0);
    return reviewDate.getTime() === today.getTime();
  });
  
  console.log(`Reviews done today: ${todayReviews.length}`);
  return todayReviews.length;
};
