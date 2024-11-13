
import React, { useEffect, useState } from 'react';
import { fetchLeaderboards } from '../api';
import LeaderboardItem from '../components/LeaderboardItem';

function LeaderboardsPage() {
  const [leaderboards, setLeaderboards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLeaderboards();
      setLeaderboards(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Top Players Leaderboard</h2>
      <div className="leaderboard">
        {leaderboards.map((player) => (
          <LeaderboardItem key={player.username} player={player} />
        ))}
      </div>
    </div>
  );
}

export default LeaderboardsPage;
