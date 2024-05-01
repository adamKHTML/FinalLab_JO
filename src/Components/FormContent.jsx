import React, { useState, } from 'react';
import { collection, addDoc, doc, getDocs } from 'firebase/firestore';
import { db, storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';



const PingPongForm = () => {


    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [ranking, setRanking] = React.useState('');
    const [style, setStyle] = React.useState('');
    const [country, setCountry] = React.useState(null);
    const [image, setImage] = React.useState(null);
    const [value, setValue] = React.useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();




    const options = countryList().getData();




    const sendPlayer = async () => {
        console.log("Button clicked, sending player...");
        try {


            if (parseInt(ranking) < 1 || parseInt(ranking) > 5) {
                setErrorMessage('Le classement doit être compris entre 1 et 5.');
                return; // Empêcher la soumission du formulaire
            }


            // Vérifie si le classement existe déjà dans la base de données
            const querySnapshot = await getDocs(collection(db, 'Players'));
            const rankingExists = querySnapshot.docs.some(doc => doc.data().ranking === parseInt(ranking));
            if (rankingExists) {
                setErrorMessage('Un joueur avec ce classement existe déjà.');
                return;
            }


            const docRef = await addDoc(collection(db, 'Players'), {
                firstName,
                lastName,
                age: parseInt(age),
                description,
                ranking: parseInt(ranking),
                style,
                country: country ? country.label : '',
                image: image ? image : "No picture :(",
            });
            console.log("Document added with ID: ", docRef.id);
            window.location.reload();
            navigate('/content');

        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };


    const handleImageUpload = async (e) => {
        const file = e.target.files[0];

        // Vérifiez si un fichier est sélectionné
        if (!file) {
            console.error('Aucun fichier sélectionné.');
            return;
        }

        try {
            // Crée une référence pour le fichier dans le stockage Firebase
            const storageRef = ref(storage, `images/${file.name}`);

            // Télécharge le fichier dans le stockage Firebase
            const snapshot = await uploadBytesResumable(storageRef, file);

            // Récupère l'URL de téléchargement du fichier
            const imageUrl = await getDownloadURL(snapshot.ref);

            // Met à jour l'état de 'image' avec l'URL de l'image téléchargée
            setImage(imageUrl);

            // Ajoute l'URL de l'image au document Firestore
            await addDoc(collection(db, 'Players'), {
                image: imageUrl
            });


            console.log("Image téléchargée avec succès :", imageUrl);
        } catch (error) {
            console.error('Erreur lors du téléchargement de l\'image :', error);
        }
    };

    const changeHandler = (selectedOption) => {
        try {
            setCountry(selectedOption); // Affecter la valeur sélectionnée à l'état 'nationality'
            setValue(selectedOption); // Affecter la valeur sélectionnée à l'état 'value'
        } catch (error) {
            console.error('Error setting country: ', error);
        }
    };

    return (
        <>

            <NavBar />

            <StyledForm>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <StyledFormGroup>
                    <StyledFormControl type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledFormControl type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledFormControl type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                </StyledFormGroup>
                <StyledFormGroup>
                    <Form.Group className="mb-3" >
                        <Form.Control as="textarea" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledFormControl
                        type="number"
                        placeholder="Ranking"
                        value={ranking}
                        onChange={(e) => setRanking(e.target.value)}
                        min={1}
                        max={5}
                    />
                </StyledFormGroup>

                <Form.Select value={style} onChange={(e) => setStyle(e.target.value)}>
                    <option value="">Select Style</option>
                    <option value="Gaucher">Gaucher</option>
                    <option value="Droitier">Droitier</option>
                </Form.Select>



                <StyledFormGroup>
                    <Select options={options} value={value} onChange={changeHandler} />
                </StyledFormGroup>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" onChange={handleImageUpload} />
                </Form.Group>
                <StyledFormGroup>
                    <StyledButton onClick={sendPlayer}>Submit</StyledButton>
                    <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>

                        <StyledButton style={{ marginTop: '15px' }} type="button">
                            Annuler
                        </StyledButton>
                    </Link>

                </StyledFormGroup>
            </StyledForm>

        </>
    );
};

export default PingPongForm;



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