const Redis = require("ioredis");

const redis = new Redis(process.env.REDIS_URL);

redis.on("connect", () => {
    console.log("✅ Redis Connected");
});

redis.on("ready", () => {
    console.log("✅ Redis Ready");
});

redis.on("error", (err) => {
    console.error("❌ Redis Error:", err);
});

module.exports = redis;