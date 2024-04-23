import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


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

    const handleEdit = (player) => {
        navigate('/edit-player', { state: { player } });
    };

    useEffect(() => {
        getPlayers();
    }, []);

    return (
        <div>
            <h1>Player List</h1>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        <div>
                            <p>Name: {player.firstName} {player.lastName}</p>
                            <p>Age: {player.age}</p>
                            <p>Description: {player.description}</p>
                            <p>Ranking: {player.ranking}</p>
                            <p>Style: {player.style}</p>
                            <p>Country: {player.country}</p>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(player.id)}>Delete</button>
                            <button onClick={() => handleEdit(player)}>Edit</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlayerList;
