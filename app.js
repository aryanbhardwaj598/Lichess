// app.js
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const profileRoutes = require("./routes/profile");
const leaderboardRoutes = require("./routes/leaderboards");
const tournamentRoutes = require("./routes/tournaments");

app.use("/profile", profileRoutes);
app.use("/leaderboards", leaderboardRoutes);
app.use("/tournaments", tournamentRoutes);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
