import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Summary from './Components/Summary';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import TopPlayers from './Components/TopPlayers';


const Dashboard = () => {

    const [imageUrl, setImageUrl] = useState('/img/Story.svg');
    const [text, setText] = useState('');
    const videoUrl = 'https://edossxvdo9gbzkuq.public.blob.vercel-storage.com/PingPong-bEJ5ka476QXeuYbexk7FEdTaa6PKIm.mp4';

    //Tentative pour changer l'image de fond de Backgroundlebrun 

    const changeBackgroundStyle = (index) => {
        if (index === 1) {
            return {
                backgroundImage: "url('/img/Lebrun1.svg')",
            };
        } else if (index === 2) {
            return {
                backgroundImage: "url('/img/Lebrun2.svg')",
            };
        }

        return {
            backgroundImage: `url('${imageUrl}')`,
        };
    };

    return (
        <>


            <GlobalStyle />
            <Video autoPlay muted loop id="bg-video" src={videoUrl} type="video/mp4" />
            <Header />
            <Homepage>
                <CarouselBackground imageUrl={imageUrl}>
                    <Carousel imageUrl={imageUrl} setImageUrl={setImageUrl} text={text} setText={setText} />
                </CarouselBackground>


            </Homepage>
            <div className='Section'>

                <PlayersSection>

                    <Title>Top 5 des Meilleurs Joueurs   Mondiaux</Title>

                    <TopPlayers />

                </PlayersSection>
                <Fill />
                <RivalBrothers>
                    <h1 style={{
                        color: ' black', fontSize: 46,
                        lineHeight: 50,
                        fontWeight: '900',
                        fontFamily: 'Lunch time, sans-serif'
                    }}>Les frères rivaux</h1>
                </RivalBrothers>
                <LebrunBackground backgroundStyle={changeBackgroundStyle(1)}>
                    <Summary changeBackgroundStyle={changeBackgroundStyle} />
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
    
     min-height: 100%;
     font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;

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
 

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/img/Podium.svg');
    background-size: cover;
    opacity: 0.5; 
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
 position: absolute; 
    top: 50px; 
    left: 55%; 
    transform: translateX(-50%); 
    color: #ffc617;
    font-size: 50px;
    line-height: 50px;
    font-weight: 900;
    font-family: 'Lunch time', sans-serif;
    
    
   
    
`;

const Fill = styled.div`
 height: 200px;
 width: 100%;
 background: linear-gradient(to bottom, #494c76, #33488b);
`;


const LebrunBackground = styled.div`
    
    
    bottom: 0;
    left: 0;
    width: 100%;
    height: 800px;
    ${({ backgroundStyle }) => backgroundStyle};
    background-size: cover;
    z-index: -1;
`;

