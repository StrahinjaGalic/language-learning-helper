# WaniKani Statistics Dashboard

A MERN stack web application for visualizing WaniKani learning progress and statistics.

## 🎯 Project Overview

This application integrates with the WaniKani API to provide users with comprehensive statistics and visualizations of their Japanese learning progress, including review activity, SRS distribution, accuracy metrics, and progress tracking over time.

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **Charts**: Chart.js + react-chartjs-2
- **Architecture**: REST API

## ✨ Features

### Phase 1 Implementation

- ✅ **Token-based Authentication** - Secure WaniKani API token validation
- ✅ **Encrypted Token Storage** - AES-256-CBC encryption for API tokens
- ✅ **Backend API Proxy** - All WaniKani API calls routed through backend
- ✅ **Daily Snapshot System** - Historical data tracking in MongoDB
- ✅ **Statistics Dashboard** with:
  - Progress overview cards (level, items, burned items, reviews)
  - Review activity line chart (30-day history)
  - SRS distribution bar chart
  - Overall accuracy display
- ✅ **Responsive Design** - Mobile-friendly interface

## 📁 Project Structure

```
language-learning-helper/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── models/
│   │   ├── User.js              # User schema
│   │   └── Snapshot.js          # Daily snapshot schema
│   ├── routes/
│   │   ├── auth.js              # Authentication endpoints
│   │   └── wanikani.js          # WaniKani proxy endpoints
│   ├── services/
│   │   ├── encryption.js        # Token encryption/decryption
│   │   └── wanikaniApi.js       # WaniKani API integration
│   ├── middleware/
│   │   └── auth.js              # Authentication middleware
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Login/
    │   │   │   ├── Login.jsx
    │   │   │   └── Login.css
    │   │   └── Dashboard/
    │   │       ├── Dashboard.jsx
    │   │       ├── Dashboard.css
    │   │       ├── ProgressCards.jsx
    │   │       ├── ProgressCards.css
    │   │       ├── ReviewChart.jsx
    │   │       ├── SRSChart.jsx
    │   │       ├── AccuracyDisplay.jsx
    │   │       └── AccuracyDisplay.css
    │   ├── services/
    │   │   └── api.js           # API client
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- WaniKani account with API token

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from example:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/wanikani-stats
ENCRYPTION_KEY=your-32-character-encryption-key-here-change-this
NODE_ENV=development
```

**⚠️ IMPORTANT**: Generate a secure 32-character encryption key:
```bash
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

5. Start the backend server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will run on `http://localhost:3000`

### MongoDB Setup

**Local MongoDB:**
```bash
mongod --dbpath /path/to/data/directory
```

**MongoDB Atlas:**
Update `MONGODB_URI` in backend `.env` with your Atlas connection string.

## 🔑 Getting Your WaniKani API Token

1. Log in to [WaniKani](https://www.wanikani.com)
2. Go to Settings → API Tokens
3. Generate a new token with read permissions
4. Copy the token for use in the application

## 📊 API Endpoints

### Authentication
- `POST /api/auth/validate-token` - Validate and store WaniKani token

### WaniKani Data (Protected)
- `GET /api/wk/profile` - User profile information
- `GET /api/wk/summary` - Review summary
- `GET /api/wk/stats` - Current statistics (creates daily snapshot)
- `GET /api/snapshots?days=30` - Historical snapshots

## 🔒 Security Features

- ✅ API tokens encrypted using AES-256-CBC
- ✅ Environment variables for sensitive data
- ✅ Backend proxy prevents direct WaniKani API exposure
- ✅ Authentication middleware for protected routes
- ✅ Rate limiting awareness (60 requests/minute)

## 📈 Database Schemas

### User Schema
```javascript
{
  wkUserId: String (unique),
  username: String,
  encryptedToken: String,
  level: Number,
  createdAt: Date,
  lastSync: Date
}
```

### Snapshot Schema
```javascript
{
  userId: ObjectId (ref: User),
  date: Date (unique per user),
  reviewCount: Number,
  srs: {
    apprentice: Number,
    guru: Number,
    master: Number,
    enlightened: Number,
    burned: Number
  },
  accuracy: Number (0-100),
  totalItems: Number,
  createdAt: Date
}
```

## 🎓 Academic Notes

This project demonstrates:
- RESTful API design principles
- Secure authentication patterns
- Third-party API integration
- Data visualization techniques
- Clean code architecture
- Separation of concerns
- Error handling best practices

## 🛣️ Future Enhancements (Phase 2+)

- User settings and preferences
- Custom date range filtering
- Export data to CSV/JSON
- Email notifications for milestones
- Comparison with community averages
- Additional chart types
- Dark mode

## 📝 License

MIT License - Academic Project

## 👨‍💻 Author

Created as a diploma project demonstrating fullstack MERN development skills.

---

**Note**: This is Phase 1 implementation. Features are intentionally limited to maintain clarity and academic focus.
