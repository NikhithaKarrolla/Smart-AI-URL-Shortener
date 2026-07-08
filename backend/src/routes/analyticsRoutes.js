const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const controller = require("../controllers/analyticsController");

// Dashboard Summary
router.get("/dashboard/summary", auth, controller.getDashboard);

// Analytics for a URL
router.get("/:id", auth, controller.getAnalytics);

module.exports = router;