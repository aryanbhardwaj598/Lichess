// src/pages/ProfilePage.js

import React, { useState } from 'react';
import { fetchProfile } from '../api';  // API utility to fetch data
import ProfileDisplay from '../components/Profile';  // Component to display profile

const ProfilePage = () => {
  const [username, setUsername] = useState('');  // Store input username
  const [profileData, setProfileData] = useState(null);  // Store profile data
  const [error, setError] = useState(null);  // Store error message
  const [loading, setLoading] = useState(false);  // Track loading state

  // Handle username input change
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  // Fetch profile data from backend API
  const fetchProfileData = async () => {
    if (!username) {
      setError("Please enter a Lichess username.");
      return;
    }

    setLoading(true);  // Show loading state
    setError(null);  // Reset error message

    try {
      const data = await fetchProfile(username);  // Fetch data using API
      setProfileData(data);  // Set profile data
    } catch (err) {
      setError("Failed to load profile data.");
      console.error("Error:", err);
    } finally {
      setLoading(false);  // Reset loading state
    }
  };

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <input
        type="text"
        placeholder="Enter Lichess username"
        value={username}
        onChange={handleInputChange}
        className="username-input"
      />
      <button onClick={fetchProfileData} className="fetch-button">Fetch Profile</button>

      {loading && <p>Loading profile...</p>}  {/* Show loading state */}
      {error && <p className="error">{error}</p>}  {/* Show error message */}
      
      {profileData && !error && <ProfileDisplay profileData={profileData} />}  {/* Show profile if data is fetched */}
    </div>
  );
};

export default ProfilePage;
