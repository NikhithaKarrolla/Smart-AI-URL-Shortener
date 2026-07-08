const Analytics = require("../models/Analytics");
const Url = require("../models/Url");

// =====================================
// Get Analytics for a Specific URL
// =====================================
exports.getAnalytics = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if URL exists
        const url = await Url.findById(id);

        if (!url) {
            return res.status(404).json({
                success: false,
                message: "URL not found."
            });
        }

        // Allow only the owner or admin
        if (
            url.user.toString() !== req.user.id &&
            req.user.role !== "admin"
        ) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized."
            });
        }

        const analytics = await Analytics.find({
            url: id
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            totalClicks: url.clicks,
            analytics
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

// =====================================
// Dashboard Summary
// =====================================
exports.getDashboard = async (req, res) => {

    try {

        const urls = await Url.find({
            user: req.user.id
        });

        const urlIds = urls.map(url => url._id);

        const analytics = await Analytics.find({
            url: { $in: urlIds }
        });

        const totalUrls = urls.length;

        const totalClicks = urls.reduce(
            (sum, url) => sum + url.clicks,
            0
        );

        // Browser Statistics
        const browsers = {};

        // Device Statistics
        const devices = {};

        // Country Statistics
        const countries = {};

        // Referrer Statistics
        const referrers = {};

        analytics.forEach(item => {

            browsers[item.browser] =
                (browsers[item.browser] || 0) + 1;

            devices[item.device] =
                (devices[item.device] || 0) + 1;

            countries[item.country] =
                (countries[item.country] || 0) + 1;

            referrers[item.referrer] =
                (referrers[item.referrer] || 0) + 1;

        });

        res.status(200).json({

            success: true,

            summary: {

                totalUrls,

                totalClicks,

                totalAnalyticsRecords: analytics.length

            },

            browsers,

            devices,

            countries,

            referrers,

            urls

        });

    } catch (err) {

        console.error(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};