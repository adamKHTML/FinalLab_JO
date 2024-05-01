import React, { useState, useEffect } from 'react';
import { updateDoc, doc, getDoc } from 'firebase/firestore';
import { db, storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UpdateContent = () => {
    const { id } = useParams();
    console.log("Player ID:", id);



    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const [player, setPlayer] = useState({
        firstName: '',
        lastName: '',
        age: '',
        description: '',
        ranking: '',
        style: '',
        country: null,
        image: null
    });

    useEffect(() => {
        const fetchPlayerData = async () => {

            try {
                const playerRef = doc(db, 'Players', id);
                const snapshot = await getDoc(playerRef);

                if (snapshot.exists()) {
                    const data = snapshot.data();
                    setPlayer(data); // Mettre à jour l'état local avec les données du joueur
                } else {
                    console.error('No such player document!');
                }
            } catch (error) {
                console.error('Error fetching player data: ', error);
            }
        };

        if (id) {
            fetchPlayerData();
        }
    }, [id]);

    const handleSubmit = async () => {
        try {
            await editPlayer();
            navigate('/admin');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const editPlayer = async () => {
        console.log("Editing player with ID:", id);
        try {





            const playerRef = doc(db, 'Players', id);
            const updatedData = {
                firstName: player.firstName,
                lastName: player.lastName,
                age: parseInt(player.age),
                description: player.description,
                ranking: parseInt(player.ranking),
                style: player.style,
                // Vérifiez si country est défini avant de l'ajouter
                country: player.country ? player.country : '',
                image: player.image ? player.image : "No picture :(",
            };
            if (parseInt(player.ranking) < 1 || parseInt(player.ranking) > 5) {
                setErrorMessage('Le classement doit être compris entre 1 et 5.');
                return;
            }

            await updateDoc(playerRef, updatedData);
            console.log('Player updated successfully');
        } catch (error) {
            console.error('Error updating player: ', error);
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];

        if (!file) {
            console.error('No file selected.');
            return;
        }

        try {
            const storageRef = ref(storage, `images/${file.name}`);
            const snapshot = await uploadBytesResumable(storageRef, file);
            const imageUrl = await getDownloadURL(snapshot.ref);
            setPlayer({ ...player, image: imageUrl });
            console.log("Image uploaded successfully :", imageUrl);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const changeHandler = (selectedOption) => {
        if (selectedOption) {
            try {
                setPlayer({ ...player, country: selectedOption });
            } catch (error) {
                console.error('Error setting country: ', error);
            }
        }
    };

    return (

        <>
            <NavBar />

            <StyledForm>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <StyledFormGroup>
                    <StyledFormControl type="text" placeholder="First Name" value={player.firstName} onChange={(e) => setPlayer({ ...player, firstName: e.target.value })} />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledFormControl type="text" placeholder="Last Name" value={player.lastName} onChange={(e) => setPlayer({ ...player, lastName: e.target.value })} />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledFormControl type="number" placeholder="Age" value={player.age} onChange={(e) => setPlayer({ ...player, age: e.target.value })} />
                </StyledFormGroup>
                <StyledFormGroup>
                    <Form.Group className="mb-3" >
                        <Form.Control as="textarea" placeholder="Description" value={player.description} onChange={(e) => setPlayer({ ...player, description: e.target.value })} />
                    </Form.Group>
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledFormControl type="number" placeholder="Ranking" value={player.ranking} onChange={(e) => setPlayer({ ...player, ranking: e.target.value })} />
                </StyledFormGroup>
                <StyledFormGroup>
                    <Form.Select value={player.style} onChange={(e) => setPlayer({ ...player, style: e.target.value })}>
                        <option value="">Select Style</option>
                        <option value="Gaucher">Gaucher</option>
                        <option value="Droitier">Droitier</option>
                    </Form.Select>
                </StyledFormGroup>
                <StyledForm>
                    <Select options={countryList().getData()} value={player.country} onChange={changeHandler} />
                </StyledForm>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" onChange={handleImageUpload} />
                </Form.Group>
                <StyledFormGroup>
                    <StyledButton onClick={handleSubmit}>Submit</StyledButton>
                    <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>

                        <StyledButton type="button" style={{ marginTop: '15px' }}>
                            Annuler
                        </StyledButton>
                    </Link>
                </StyledFormGroup>

            </StyledForm>
        </>
    );
};

export default UpdateContent;



const StyledForm = styled(Form)`
    padding: 9px;
    border-radius: 10px;
    border-color: #000000;
    margin-top: 60px;
`;

const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 20px;
`;

const StyledFormControl = styled(Form.Control)`
  
  border: 1px solid ;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const ErrorMessage = styled.p`
    color: red;
    margin-top: 5px;
    font-size: 14px;
    border-radius: 8px;
    background-color: #f87272;
`;