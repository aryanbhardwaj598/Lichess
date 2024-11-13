// routes/profile.js
const express = require("express");
const router = express.Router();
const { getUserProfile } = require("../controllers/profileController");

// Route to get user profile by username
router.get("/:username", getUserProfile);

module.exports = router;
