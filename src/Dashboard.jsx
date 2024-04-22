import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Summary from './Components/Summary';
import Header from './Components/Header';

import CarouselFadeExample from './Components/Carousel';

const Dashboard = () => {
    return (
        <>


            <Header />
            <DashboardContainer>
                <CarouselFadeExample />


                <Summary />
                <Link to="/formulaire" style={{ textDecoration: 'none', color: 'inherit' }}>

                    <button type="button" className="btn btn-dark">
                        Connexion
                    </button>
                </Link>

            </DashboardContainer>
        </>
    )
}

export default Dashboard

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 65%;
`;