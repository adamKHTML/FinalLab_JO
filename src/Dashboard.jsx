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
            <Homepage>
                <CarouselBackground imageUrl={imageUrl}>
                    <Carousel imageUrl={imageUrl} setImageUrl={setImageUrl} text={text} setText={setText} />
                </CarouselBackground>


            </Homepage>
            <div className='Section'>
                <PlayersSection>
                    <TopPlayers />
                </PlayersSection>


                <Summary />


            </div>
        </>
    )
}

export default Dashboard

const GlobalStyle = createGlobalStyle`
   body {
    overflow-x: hidden; 
    
    margin: 0px;
    padding: 0px;
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
const Homepage = styled.div`
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
  margin-top: 62%;
 
    left: 0;
    width: 100%;
    height: 790px;
    background-image: url('/img/Podium.svg');
    background-size: cover;
    display: flex;
    align-items: center;
`;