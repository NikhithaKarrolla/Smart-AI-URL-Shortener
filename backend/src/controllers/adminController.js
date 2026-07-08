const User = require("../models/User");
const Url = require("../models/Url");
const Analytics = require("../models/Analytics");
exports.getAllUsers = async (req, res) => {

    try {

        const users = await User.find().select("-password");

        res.json({

            success: true,

            count: users.length,

            users

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};
exports.getAllUrls = async (req, res) => {

    try {

        const urls = await Url.find()

            .populate("user", "name email role")

            .sort({ createdAt: -1 });

        res.json({

            success: true,

            count: urls.length,

            urls

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};
exports.deleteAnyUrl = async (req, res) => {

    try {

        const url = await Url.findById(req.params.id);

        if (!url) {

            return res.status(404).json({

                success: false,

                message: "URL not found."

            });

        }

        await url.deleteOne();

        res.json({

            success: true,

            message: "URL deleted successfully."

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};
//block or unblock url
exports.toggleBlockUrl = async (req, res) => {

    try {

        const url = await Url.findById(req.params.id);

        if (!url) {

            return res.status(404).json({

                success: false,

                message: "URL not found."

            });

        }

        url.isActive = !url.isActive;

        await url.save();

        res.json({

            success: true,

            message: url.isActive
                ? "URL Activated"
                : "URL Blocked",

            url

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};
//Promote or demote Users
exports.changeUserRole = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found."

            });

        }

        user.role =
            user.role === "admin"
                ? "user"
                : "admin";

        await user.save();

        res.json({

            success: true,

            message: "Role updated.",

            role: user.role

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};
//admin DAshborad
exports.getDashboard = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalUrls = await Url.countDocuments();

        const safeUrls = await Url.countDocuments({

            phishingStatus: "Safe"

        });

        const maliciousUrls = await Url.countDocuments({

            phishingStatus: "Malicious"

        });

        const totalClicks = await Url.aggregate([

            {

                $group: {

                    _id: null,

                    total: {

                        $sum: "$clicks"

                    }

                }

            }

        ]);

        const latestUsers = await User.find()

            .select("-password")

            .sort({ createdAt: -1 })

            .limit(5);

        const latestUrls = await Url.find()

            .populate("user", "name email")

            .sort({ createdAt: -1 })

            .limit(5);

        const topBrowsers = await Analytics.aggregate([

            {

                $group: {

                    _id: "$browser",

                    count: {

                        $sum: 1

                    }

                }

            },

            {

                $sort: {

                    count: -1

                }

            }

        ]);

        const topCountries = await Analytics.aggregate([

            {

                $group: {

                    _id: "$country",

                    count: {

                        $sum: 1

                    }

                }

            },

            {

                $sort: {

                    count: -1

                }

            }

        ]);

        res.json({

            success: true,

            dashboard: {

                totalUsers,

                totalUrls,

                totalClicks:
                    totalClicks[0]?.total || 0,

                safeUrls,

                maliciousUrls,

                topBrowsers,

                topCountries,

                latestUsers,

                latestUrls

            }

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};
