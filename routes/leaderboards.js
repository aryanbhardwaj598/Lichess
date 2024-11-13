
const express = require("express");
const router = express.Router();
const { getLeaderboards } = require("../controllers/leaderboardController");

// Route to get leaderboard data
router.get("/", getLeaderboards);

module.exports = router;
