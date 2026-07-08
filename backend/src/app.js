const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// Routes
const authRoutes = require("./routes/authRoutes");
const urlRoutes = require("./routes/urlRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Controllers
const { redirectUrl } = require("./controllers/urlController");



const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Health Check
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server Running 🚀"
    });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/url", urlRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/admin", adminRoutes);

// Redirect Route (Always Last)
app.get("/:code", redirectUrl);

module.exports = app;