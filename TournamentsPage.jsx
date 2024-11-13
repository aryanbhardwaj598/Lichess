
import React, { useEffect, useState } from 'react';
import { fetchTournaments } from '../api';
import TournamentItem from '../components/TournamentItem';

function TournamentsPage() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTournaments();
      setTournaments(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Ongoing Tournaments</h2>
      <div className="tournaments">
        {tournaments.map((tournament) => (
          <TournamentItem key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
}

export default TournamentsPage;
