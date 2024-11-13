
const express = require("express");
const router = express.Router();
const { getTournaments } = require("../controllers/tournamentController");

// Route to get tournaments data
router.get("/", getTournaments);

module.exports = router;   
