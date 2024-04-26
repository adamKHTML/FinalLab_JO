import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavBar from './Components/NavBar';


const Admin = () => {





    return (
        <>
            <NavBar />
            <h1>Welcome Administrator</h1>


            <Link to="/content">
                <button type="button" className="btn btn-dark">
                    Content
                </button>
            </Link>
            <Link to="/playersList">
                <button type="button" className="btn btn-dark">
                    Players
                </button>
            </Link>


        </>
    );
}

export default Admin;

