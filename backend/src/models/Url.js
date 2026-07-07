const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    originalUrl: {
        type: String,
        required: true
    },

    shortCode: {
        type: String,
        unique: true,
        required: true
    },

    customAlias: {
        type: String,
        default: null
    },

    shortUrl: {
        type: String
    },

    qrCode: {
        type: String
    },

    summary: {
    type: String,
    default: ""
    },

    category: {
    type: String,
    default: ""
    },

    phishingStatus: {
    type: String,
    enum: ["Safe", "Suspicious", "Malicious", "Unknown"],
    default: "Unknown"
    },

    clicks: {
        type: Number,
        default: 0
    },

    isActive: {
        type: Boolean,
        default: true
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Url", urlSchema);