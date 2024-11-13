
import React from 'react';

function TournamentItem({ tournament }) {
  return (
    <div className="tournament-item">
      <h4>{tournament.name}</h4>
      <p>Status: {tournament.status}</p>
    </div>
  );
}

export default TournamentItem;
