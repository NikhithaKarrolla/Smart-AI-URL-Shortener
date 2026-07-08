const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
{
    url: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Url",
        required: true
    },

    ip: String,

    browser: String,

    os: String,

    device: String,

    country: String,

    city: String,

    referrer: String

},
{
    timestamps: true
});

module.exports = mongoose.model("Analytics", analyticsSchema);