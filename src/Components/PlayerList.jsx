import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';


const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    const getPlayers = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Players'));
            const playersList = [];
            querySnapshot.forEach((doc) => {
                playersList.push({ id: doc.id, ...doc.data() });
            });
            setPlayers(playersList);
        } catch (error) {
            console.error('Error fetching players: ', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'Players', id));
            const updatedPlayers = players.filter((player) => player.id !== id);
            setPlayers(updatedPlayers);
        } catch (error) {
            console.error('Error deleting player: ', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/update/${id}`);
    };

    useEffect(() => {
        getPlayers();
    }, []);

    return (
        <PlayerListContainer>
            <h1>Player List</h1>
            <ul>
                {players.map((player) => (
                    <PlayerItem key={player.id}>
                        <PlayerInfo>
                            <PlayerImage src={player.image} alt={`${player.firstName} ${player.lastName}`} />
                            <p><strong>Name:</strong> {player.firstName} {player.lastName}</p>
                            <p><strong>Age:</strong> {player.age}</p>
                            <p><strong>Description:</strong> {player.description}</p>
                            <p><strong>Ranking:</strong> {player.ranking}</p>
                            <p><strong>Style:</strong> {player.style}</p>
                            <p><strong>Country:</strong> {player.country}</p>
                        </PlayerInfo>
                        <div>
                            <Button onClick={() => handleDelete(player.id)}>Delete</Button>
                            <Button onClick={() => handleEdit(player.id)}>Edit</Button>
                        </div>
                    </PlayerItem>
                ))}
            </ul>
        </PlayerListContainer>
    );
};


export default PlayerList;

const PlayerListContainer = styled.div`
    padding: 20px;
`;

const PlayerItem = styled.li`
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
`;

const PlayerInfo = styled.div`
    flex-grow: 1;
`;

const PlayerImage = styled.img`
    width: 100px; // Largeur fixe
    height: 100px; // Hauteur fixe
    border-radius: 24%; // Conserver l'arrondi
    margin-right: 20px;
    object-fit: cover; // Conserver les proportions sans déformation
`;

const Button = styled.button`
    background-color: ${(props) => props.color || '#6f5cc3'};
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
        background-color: ${(props) => props.hoverColor || 'violet'};
    }
`;
