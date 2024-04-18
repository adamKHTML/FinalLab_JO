import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Summary from './Summary';

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <Summary />
            <Link to="/formulaire" style={{ textDecoration: 'none', color: 'inherit' }}>

                <button type="button" className="btn btn-dark">
                    Add
                </button>
            </Link>
        </>
    )
}

export default Dashboard
