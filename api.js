// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001'; // Backend server URL

export const fetchProfile = async (username) => {
  const response = await axios.get(`${API_BASE_URL}/profile/${username}`);
  return response.data;
};

export const fetchLeaderboards = async (count = 10, perfType = 'blitz') => {
  const response = await axios.get(`${API_BASE_URL}/leaderboards?count=${count}&perfType=${perfType}`);
  return response.data;
};

export const fetchTournaments = async () => {
  const response = await axios.get(`${API_BASE_URL}/tournaments`);
  return response.data;
};
