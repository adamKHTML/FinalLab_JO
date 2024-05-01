import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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

                    <Title>Top 5 des Meilleurs Joueurs des meilleurs Joueurs Mondiaux</Title>

                    <TopPlayers />

                </PlayersSection>

                <RivalBrothers>
                    <h1 style={{
                        color: ' black', fontSize: 46,
                        lineHeight: 50,
                        fontWeight: '900',
                        fontFamily: 'Lunch time, sans-serif'
                    }}>Les frères rivaux</h1>
                </RivalBrothers>
                <LebrunBackground>
                    <Summary />
                </LebrunBackground>


            </div>
        </>
    )
}

export default Dashboard

const GlobalStyle = createGlobalStyle`
   body {
    overflow-x: hidden; 
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0%, /* #000000 opacity: 100% */
      rgba(2, 2, 36, 0.99) 22%, /* #020224 opacity: 99% */
      rgba(2, 4, 49, 1) 46%, /* #020431 opacity: 100% */
      rgba(97, 47, 60, 0.4) 55%, /* #612F3C opacity: 40% */
      rgba(21, 3, 72, 1) 62%, /* #150348 opacity: 100% */
      rgba(18, 25, 90, 0.95) 76%, /* #12195A opacity: 95% */
      rgba(0, 171, 206, 1) 100% /* #00ABCE opacity: 100% */
    );
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    font-family: sans-serif;
  }
`;

const Video = styled.video`
  position: absolute;
  top: -126px;
  left: 0;
  width: 100%;
  height: 1291px;
  object-fit: cover;
  margin-bottom: 400px; 
`;
const Homepage = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 36%;
`;

const CarouselBackground = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 800px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-size: cover;
    
`;

const PlayersSection = styled.div`
  position: relative;
  margin-top: 62%;
  left: 0;
  width: 100%;
  height: 1144px;
  display: flex;
  align-items: center;
  margin-bottom: 200px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/img/Podium.svg');
    background-size: cover;
    opacity: 0.5; /* Opacité de l'image de fond */
  }
`;
const RivalBrothers = styled.div`
    
 
 
    left: 0;
    width: 100%;
    height: 367px;
    background-image: url('/img/Rival.svg');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 60px;
`;

const Title = styled.h1`
 position: absolute; /* Ajoutez cette ligne */
    top: 20px; /* Ajustez selon votre besoin */
    left: 55%; /* Placez le titre au centre */
    transform: translateX(-50%); /* Centrez horizontalement */
    color: #ffc617;
    font-size: 46px;
    line-height: 50px;
    font-weight: 900;
    font-family: 'Lunch time', sans-serif;
    
   
    
`;

const LebrunBackground = styled.div`
    
    left: 0;
    width: 100%;
    height: 800px;
    background-image: url('/img/Lebrun1.svg') ;
    background-size: cover;
    
`;

