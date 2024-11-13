
const axios = require("axios");

const getLeaderboards = async (req, res) => {
  const { count = 10, perfType = "blitz" } = req.query; // Default to top 10 in blitz

  try {
    const response = await axios.get(`https://lichess.org/api/player/top/${count}/${perfType}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching leaderboard data" });
  }
};

module.exports = { getLeaderboards };
