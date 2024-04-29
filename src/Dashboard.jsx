import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import Summary from './Components/Summary';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import TopPlayers from './Components/TopPlayers';

const Dashboard = () => {

    const [imageUrl, setImageUrl] = useState('/img/Story.svg');
    const [text, setText] = useState('');

    return (
        <>
            <GlobalStyle />
            <Video autoPlay muted loop id="bg-video" src="./video/PingPong.mp4" type="video/mp4" />
            <Header />
            <DashboardContainer>
                <CarouselBackground imageUrl={imageUrl}>
                    <Carousel imageUrl={imageUrl} setImageUrl={setImageUrl} text={text} setText={setText} />
                </CarouselBackground>
                <div className='Container'>
                    <PlayersSection>
                        <TopPlayers />
                    </PlayersSection>


                    <Summary />
                </div>
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

const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-image: url("/img/BackgroundImg.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    font-family: sans-serif;
    
  }

`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 400px;
`;
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 65%;
`;

const CarouselBackground = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-size: cover;
    
`;

const PlayersSection = styled.div`
   margin-top: 45px;
    
`;