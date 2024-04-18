import React from 'react';
import styled from 'styled-components';
import { FIREBASE_AUTH } from './firebaseConfig'
import { useNavigate } from 'react-router-dom';



const Admin = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        FIREBASE_AUTH.signOut()
            .then(() => {
                navigate('/');
                console.log('Déconnexion réussie');

            })
            .catch((error) => {
                console.error('Erreur lors de la déconnexion:', error);
            });
    };

    return (
        <>
            <h1>Welcome Administrator</h1>

            <button onClick={handleLogout}>Logout</button>

        </>
    );
}

export default Admin;

