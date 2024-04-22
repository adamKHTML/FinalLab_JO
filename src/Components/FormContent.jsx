import React, { useState } from 'react';
import { collection, addDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const PingPongForm = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [ranking, setRanking] = React.useState('');
    const [style, setStyle] = React.useState('');
    const [country, setCountry] = React.useState(null); // Changer le type de l'état à 'null'
    const [value, setValue] = React.useState('');

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
                country: country ? country.label : ''
            });
            console.log("Document added with ID: ", docRef.id);
        } catch (error) {
            console.error('Error adding document: ', error);
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
            <button onClick={sendPlayer}>Add Player</button>
        </div>
    );
};

export default PingPongForm;
