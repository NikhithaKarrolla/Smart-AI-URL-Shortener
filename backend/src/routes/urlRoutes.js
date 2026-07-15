const express = require("express");

const router = express.Router();

const controller = require("../controllers/urlController");



const auth = require("../middleware/authMiddleware");

router.post("/shorten", auth, controller.createShortUrl);

router.get("/myurls", auth, controller.getMyUrls);

router.delete("/:id", auth, controller.deleteUrl);

module.exports = router;