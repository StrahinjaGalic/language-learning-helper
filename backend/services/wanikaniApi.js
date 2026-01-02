import axios from 'axios';

const WANIKANI_BASE_URL = 'https://api.wanikani.com/v2';

// Rate limiting: WaniKani allows 60 requests/minute
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Queue-based rate limiter to handle concurrent requests properly
class RateLimiter {
  constructor(requestsPerMinute = 60) {
    this.queue = [];
    this.processing = false;
    this.requestsPerMinute = requestsPerMinute;
    this.minInterval = (60 * 1000) / requestsPerMinute; // milliseconds between requests
    this.lastRequestTime = 0;
  }

  async enqueue(requestFn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ requestFn, resolve, reject });
      this.processQueue();
    });
  }

  async processQueue() {
    if (this.processing || this.queue.length === 0) return;
    
    this.processing = true;
    
    while (this.queue.length > 0) {
      const { requestFn, resolve, reject } = this.queue.shift();
      
      // Wait for rate limit interval
      const now = Date.now();
      const timeSinceLastRequest = now - this.lastRequestTime;
      if (timeSinceLastRequest < this.minInterval) {
        await delay(this.minInterval - timeSinceLastRequest);
      }
      
      try {
        this.lastRequestTime = Date.now();
        const result = await requestFn();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }
    
    this.processing = false;
  }
}

const rateLimiter = new RateLimiter(55); // Slightly under 60 to be safe

const rateLimitedRequest = async (url, token) => {
  return rateLimiter.enqueue(async () => {
    return axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Wanikani-Revision': '20170710'
      }
    });
  });
};

// Simple in-memory cache with TTL
class SimpleCache {
  constructor(ttlMinutes = 5) {
    this.cache = new Map();
    this.ttl = ttlMinutes * 60 * 1000; // convert to milliseconds
  }

  set(key, value) {
    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }

  get(key) {
    const cached = this.cache.get(key);
    if (!cached) return null;
    
    const age = Date.now() - cached.timestamp;
    if (age > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.value;
  }

  clear() {
    this.cache.clear();
  }
}

const assignmentsCache = new SimpleCache(5); // 5 minute cache
const reviewStatsCache = new SimpleCache(5);
const subjectsCache = new SimpleCache(30); // 30 minute cache for subjects

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
  // Check cache first
  const cacheKey = `assignments_${token.substring(0, 10)}`;
  const cached = assignmentsCache.get(cacheKey);
  if (cached) {
    console.log('Returning cached assignments');
    return cached;
  }

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
    
    // Cache the result
    assignmentsCache.set(cacheKey, allAssignments);
    
    return allAssignments;
  } catch (error) {
    console.error('Error fetching assignments:', error.message);
    throw new Error('Failed to fetch assignments');
  }
};

export const getReviewStatistics = async (token) => {
  // Check cache first
  const cacheKey = `reviewStats_${token.substring(0, 10)}`;
  const cached = reviewStatsCache.get(cacheKey);
  if (cached) {
    console.log('Returning cached review statistics');
    return cached;
  }

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
    
    // Cache the result
    reviewStatsCache.set(cacheKey, allStats);
    
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

export const getSubjects = async (token, subjectIds = null) => {
  try {
    let allSubjects = [];
    let url = `${WANIKANI_BASE_URL}/subjects`;
    
    if (subjectIds && subjectIds.length > 0) {
      // Check cache for specific subjects
      const uncachedIds = [];
      const cachedSubjects = [];
      
      subjectIds.forEach(id => {
        const cached = subjectsCache.get(`subject_${id}`);
        if (cached) {
          cachedSubjects.push(cached);
        } else {
          uncachedIds.push(id);
        }
      });
      
      if (cachedSubjects.length > 0) {
        console.log(`Found ${cachedSubjects.length} subjects in cache`);
        allSubjects = allSubjects.concat(cachedSubjects);
      }
      
      if (uncachedIds.length === 0) {
        return allSubjects; // All were cached
      }
      
      // Fetch uncached subjects by ID (max 1000 per request)
      const chunks = [];
      for (let i = 0; i < uncachedIds.length; i += 1000) {
        chunks.push(uncachedIds.slice(i, i + 1000));
      }
      
      for (const chunk of chunks) {
        const idsParam = chunk.join(',');
        const response = await rateLimitedRequest(`${url}?ids=${idsParam}`, token);
        const newSubjects = response.data.data;
        
        // Cache each subject individually
        newSubjects.forEach(subject => {
          subjectsCache.set(`subject_${subject.id}`, subject);
        });
        
        allSubjects = allSubjects.concat(newSubjects);
        console.log(`Fetched ${allSubjects.length} subjects so far...`);
      }
    } else {
      // Fetch all subjects (paginated) - rare case, don't cache
      let nextUrl = url;
      
      while (nextUrl) {
        const response = await rateLimitedRequest(nextUrl, token);
        allSubjects = allSubjects.concat(response.data.data);
        nextUrl = response.data.pages.next_url;
        
        console.log(`Fetched ${allSubjects.length} subjects so far...`);
        
        // Safety limit
        if (allSubjects.length > 10000) break;
      }
    }
    
    console.log(`Total subjects fetched: ${allSubjects.length}`);
    return allSubjects;
  } catch (error) {
    console.error('Error fetching subjects:', error.message);
    throw new Error('Failed to fetch subjects');
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
