import React, { useState, } from 'react';
import { collection, addDoc, doc } from 'firebase/firestore';
import { db, storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { useNavigate } from 'react-router-dom';





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
    const navigate = useNavigate();




    const options = countryList().getData();




    const sendPlayer = async () => {
        console.log("Button clicked, sending player...");
        try {
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

        <div>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder="Ranking" value={ranking} onChange={(e) => setRanking(e.target.value)} />
            <select value={style} onChange={(e) => setStyle(e.target.value)}>
                <option value="">Select Style</option>
                <option value="Gaucher">Gaucher</option>
                <option value="Droitier">Droitier</option>
            </select>
            <Select options={options} value={value} onChange={changeHandler} />
            <input type="file" onChange={handleImageUpload} />
            <button onClick={sendPlayer}>Submit</button>
        </div>
    );
};

export default PingPongForm;
