import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const TopPlayers = () => {
    const [topPlayers, setTopPlayers] = useState([]);

    useEffect(() => {
        const fetchTopPlayers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Players'));
                const playersList = [];
                querySnapshot.forEach((doc) => {
                    playersList.push({ id: doc.id, ...doc.data() });
                });
                // Trier les joueurs par rang
                playersList.sort((a, b) => a.ranking - b.ranking);
                // Sélectionner les 5 premiers joueurs
                const topFivePlayers = playersList.slice(0, 5);
                setTopPlayers(topFivePlayers);
            } catch (error) {
                console.error('Error fetching top players: ', error);
            }
        };

        fetchTopPlayers();
    }, []);

    return (
        <TopPlayersContainer>
            {topPlayers.map((player) => (
                <PlayerCard key={player.id}>
                    <PlayerImage src={player.image} alt={`${player.firstName} ${player.lastName}`} />
                    <PlayerInfo>
                        <h3>{player.firstName} {player.lastName}</h3>
                        <p><strong>Rank:</strong> {player.ranking}</p>
                        <p><strong>Age:</strong> {player.age}</p>
                        <p><strong>Description:</strong> {player.description}</p>
                    </PlayerInfo>
                </PlayerCard>
            ))}
        </TopPlayersContainer>
    );
};

export default TopPlayers;

const TopPlayersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 400px;
`;

const PlayerCard = styled.div`
    display: flex;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PlayerImage = styled.img`
    width: 150px;
    height: 150px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    object-fit: cover;
`;

const PlayerInfo = styled.div`
    padding: 20px;
`;

