// src/components/ProfileDisplay.js

import React from 'react';

const ProfileDisplay = ({ profileData }) => {
  return (
    <div className="profile-info">
      <h2>{profileData.username}</h2>
      {profileData.bio && <p><strong>Bio:</strong> {profileData.bio}</p>}
      <p><strong>Games Played:</strong> {profileData.gamesPlayed}</p>
      <div>
        <strong>Ratings:</strong>
        <ul>
          <li>Blitz: {profileData.ratings.blitz}</li>
          <li>Rapid: {profileData.ratings.rapid}</li>
          <li>Classical: {profileData.ratings.classical}</li>
        </ul>
      </div>
      {profileData.profileImage && (
        <img
          src={profileData.profileImage}
          alt={`${profileData.username}'s profile`}
          className="profile-image"
        />
      )}
    </div>
  );
};

export default ProfileDisplay;
