const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

console.log("authController:", authController);
console.log("authMiddleware:", authMiddleware);

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/profile", authMiddleware, (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});

module.exports = router;