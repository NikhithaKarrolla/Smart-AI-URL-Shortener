# 🔗 Smart AI URL Shortener

An AI-powered full-stack URL shortening platform that creates secure short links while providing intelligent insights such as phishing detection, webpage summaries, URL classification, QR code generation, and real-time analytics.

---

## 🚀 Features

- 🔐 Secure User Authentication (JWT)
- ✂️ URL Shortening with Custom Alias Support
- 📱 QR Code Generation
- 🤖 AI-Based Phishing Detection
- 📝 AI Webpage Summarization
- 🏷️ Smart URL Classification
- 📊 Real-Time Analytics Dashboard
- 🌍 Country-wise Click Tracking
- 💻 Browser & Device Analytics
- 🔗 One-Click URL Redirection
- ⚡ Redis Caching for Faster Redirects
- 👨‍💼 Admin Dashboard
- 🛡️ Role-Based Access Control

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt

### Database
- MongoDB
- Mongoose

### Cache
- Redis

### AI Integration
- Google Gemini API

### Other Tools
- Docker
- QRCode Generator
- Git & GitHub

---

## 📂 Project Structure

```
Smart-AI-URL-Shortener
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/NikhithaKarrolla/Smart-AI-URL-Shortener
cd <repository-name>
```

### 2. Install Dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

BASE_URL=http://localhost:5000

REDIS_URL=your_redis_connection

GEMINI_API_KEY=your_gemini_api_key
```

---

## ▶️ Running the Project

Backend

```bash
npm run dev
```

Frontend

```bash
npm start
```

---

## 📊 Analytics

The dashboard provides:

- Total URLs
- Total Clicks
- Browser Analytics
- Device Analytics
- Country Analytics
- Referrer Analytics
- Individual URL Statistics

---

## 🤖 AI Features

### Phishing Detection
Analyzes URLs before shortening to detect potential phishing or malicious websites.

### Webpage Summarization
Generates concise summaries of webpage content using Google's Gemini AI.

### URL Classification
Automatically categorizes URLs into relevant topics for better organization.

---

## 🔒 Authentication

- User Registration
- User Login
- JWT Authorization
- Protected Routes
- Admin Authorization

---


## 🔮 Future Enhancements

- Password Reset via Email
- Link Expiration
- Bulk URL Shortening
- Custom Domains
- Team Workspaces
- AI Risk Score
- Dark Mode
- Export Analytics (PDF/CSV)

---

## 👩‍💻 Author

**Nikhitha Karrolla**

GitHub: https://github.com/NikhithaKarrolla

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
