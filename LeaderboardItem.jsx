
import React from 'react';

function LeaderboardItem({ player }) {
  return (
    <div className="leaderboard-item">
      <h4>{player.username}</h4>
      <p>Title: {player.title || 'N/A'}</p>
      <p>Rating: {player.rating}</p>
    </div>
  );
}

export default LeaderboardItem;
