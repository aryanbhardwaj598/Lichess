// controllers/profileController.js
const axios = require("axios");

// Function to fetch user profile data from Lichess
const getUserProfile = async (req, res) => {
  const username = req.params.username;

  try {
    const response = await axios.get(`https://lichess.org/api/user/${username}`);
    res.json(response.data); // Send the data to the frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching profile data" });
  }
};

module.exports = { getUserProfile };
