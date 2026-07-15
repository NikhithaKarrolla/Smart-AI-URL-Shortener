const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");



const controller = require("../controllers/adminController");

router.use(auth, admin);

router.get("/dashboard", controller.getDashboard);

router.get("/users", controller.getAllUsers);

router.get("/urls", controller.getAllUrls);

router.put("/user/:id", controller.changeUserRole);

router.patch("/block/:id", controller.toggleBlockUrl);

router.delete("/url/:id", controller.deleteAnyUrl);

module.exports = router;