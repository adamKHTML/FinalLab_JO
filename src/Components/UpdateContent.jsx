import React, { useState, useEffect } from 'react';
import { updateDoc, doc, getDoc } from 'firebase/firestore';
import { db, storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateContent = () => {
    const { id } = useParams();
    console.log("Player ID:", id);



    const navigate = useNavigate();

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
            navigate('/playersList');
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
                country: player.country ? player.country.label : '',
                image: player.image ? player.image : "No picture :(",
            };

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
        <div>
            <input type="text" placeholder="First Name" value={player.firstName} onChange={(e) => setPlayer({ ...player, firstName: e.target.value })} />
            <input type="text" placeholder="Last Name" value={player.lastName} onChange={(e) => setPlayer({ ...player, lastName: e.target.value })} />
            <input type="number" placeholder="Age" value={player.age} onChange={(e) => setPlayer({ ...player, age: e.target.value })} />
            <textarea placeholder="Description" value={player.description} onChange={(e) => setPlayer({ ...player, description: e.target.value })} />
            <input type="number" placeholder="Ranking" value={player.ranking} onChange={(e) => setPlayer({ ...player, ranking: e.target.value })} />
            <select value={player.style} onChange={(e) => setPlayer({ ...player, style: e.target.value })}>
                <option value="">Select Style</option>
                <option value="Gaucher">Gaucher</option>
                <option value="Droitier">Droitier</option>
            </select>
            <Select options={countryList().getData()} value={player.country} onChange={changeHandler} />
            <input type="file" onChange={handleImageUpload} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default UpdateContent;
