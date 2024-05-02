import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from './Components/NavBar';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';


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
            <NavBar />

            <h1 style={{ marginTop: '8%', textAlign: 'center' }}>Bienvenue, Cher Admin</h1>

            <Section>
                <h2>Liste des Pongistes</h2>
                <Link to="/add">
                    <button type="button" className="btn btn-dark">
                        Ajouter
                    </button>
                </Link>
            </Section>
            <StyledTable striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Description</th>
                        <th>Ranking</th>
                        <th>Style</th>
                        <th>Country</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player.id}>

                            <td> <PlayerImage src={player.image} alt={`${player.firstName} ${player.lastName}`} /></td>
                            <td>{player.firstName} {player.lastName}</td>
                            <td>{player.age}</td>
                            <td>{player.description}</td>
                            <td>{player.ranking}</td>
                            <td>{player.style}</td>
                            <td>{player.country}</td>

                            <td>
                                <div style={{ display: 'flex' }}>
                                    <Boutton onClick={() => handleDelete(player.id)}>Delete</Boutton>
                                    <Boutton onClick={() => handleEdit(player.id)}>Edit</Boutton>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </PlayerListContainer>
    );
};


export default PlayerList;

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 90px 0 30px 0;
    
`;

const PlayerListContainer = styled.div`
    padding: 20px;
    
    
`;

const StyledTable = styled(Table)`
    margin-bottom: 20px;
  
    border: 1px solid #ccc;
    border-radius: 8px;
   
   
`;



const PlayerImage = styled.img`
    width: 100px; 
    height: 100px; 
    border-radius: 24%; 
    margin-right: 20px;
    object-fit: cover; 
`;

const Boutton = styled.button`
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
