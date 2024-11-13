
const axios = require("axios");

const getTournaments = async (req, res) => {
  try {
    const response = await axios.get("https://lichess.org/api/tournament");
    res.json(response.data); // Send the tournaments data to the frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching tournaments data" });
  }
};

module.exports = { getTournaments };
