const express = require("express");
const { getUsersForSidebar } = require("../controllers/user.controller");
const { protectRoute } = require("../middleware/protectRoute");

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

module.exports = router;