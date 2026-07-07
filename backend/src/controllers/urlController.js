const Url = require("../models/Url");
const generateShortCode = require("../utils/generateShortCode");
const QRCode = require("qrcode");
const redis = require("../config/redis");
const { analyzeURL } = require("../ai/aiService");

// ===============================
// Create Short URL
// ===============================
exports.createShortUrl = async (req, res) => {
    try {
        const { originalUrl, customAlias } = req.body;

        // Validate URL
        try {
            new URL(originalUrl);
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid URL."
            });
        }

        // Check if URL already exists for this user
        const existingUrl = await Url.findOne({
            user: req.user.id,
            originalUrl
        });

        if (existingUrl) {
            return res.status(200).json({
                success: true,
                message: "URL already shortened.",
                data: existingUrl
            });
        }

        let shortCode;

        // Custom Alias
        if (customAlias && customAlias.trim() !== "") {
            const exists = await Url.findOne({
                shortCode: customAlias
            });

            if (exists) {
                return res.status(400).json({
                    success: false,
                    message: "Custom alias already exists."
                });
            }

            shortCode = customAlias.trim();
        } else {
            shortCode = generateShortCode();
        }

        // AI Analysis
        const aiResult = await analyzeURL(originalUrl);

        // Block malicious URLs
        if (aiResult.phishingStatus === "Malicious") {
            return res.status(400).json({
                success: false,
                message: "This URL is detected as malicious and cannot be shortened."
            });
        }

        const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

        const qrCode = await QRCode.toDataURL(shortUrl);

        const url = await Url.create({
            user: req.user.id,
            originalUrl,
            shortCode,
            customAlias: customAlias || null,
            shortUrl,
            qrCode,
            summary: aiResult.summary,
            category: aiResult.category,
            phishingStatus: aiResult.phishingStatus
        });

        // Cache in Redis
        await redis.set(shortCode, originalUrl);

        res.status(201).json({
            success: true,
            message: "Short URL created successfully.",
            data: url
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// ===============================
// Redirect URL
// ===============================
exports.redirectUrl = async (req, res) => {
    try {
        const { code } = req.params;

        // Check Redis first
        let originalUrl = await redis.get(code);

        if (originalUrl) {
            await Url.findOneAndUpdate(
                { shortCode: code },
                { $inc: { clicks: 1 } }
            );

            return res.redirect(originalUrl);
        }

        // Fetch from MongoDB
        const url = await Url.findOne({
            shortCode: code,
            isActive: true
        });

        if (!url) {
            return res.status(404).json({
                success: false,
                message: "URL not found."
            });
        }

        // Save in Redis
        await redis.set(code, url.originalUrl);

        // Increase click count
        url.clicks += 1;
        await url.save();

        res.redirect(url.originalUrl);

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// ===============================
// Get Logged-in User URLs
// ===============================
exports.getMyUrls = async (req, res) => {
    try {
        const urls = await Url.find({
            user: req.user.id
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: urls.length,
            data: urls
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// ===============================
// Delete URL
// ===============================
exports.deleteUrl = async (req, res) => {
    try {
        const url = await Url.findById(req.params.id);

        if (!url) {
            return res.status(404).json({
                success: false,
                message: "URL not found."
            });
        }

        // Owner check
        if (url.user.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized."
            });
        }

        // Remove Redis cache
        await redis.del(url.shortCode);

        // Delete from MongoDB
        await url.deleteOne();

        res.status(200).json({
            success: true,
            message: "URL deleted successfully."
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};