
import React from 'react';
import styled from 'styled-components';
import 'primeicons/primeicons.css';
import Story1 from '/img/Story1.svg';
import Story2 from '/img/Story2.svg';
import Story3 from '/img/Story3.svg';
import Story4 from '/img/Story4.svg';
import Story5 from '/img/Story5.svg';




const TimelineSlider = ({ setImageUrl, imageUrl, text, setText }) => {




    const handleDateClick = (date) => {

        let newText = '';

        let image = '';
        // Associer chaque date à son image correspondante
        switch (date) {



            case '1901':
                image = Story1;
                newText = <p>
                    <span style={{ fontFamily: 'Lunch time' }}>1901</span> <br /> <span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}> John Jaques</span> dépose le nom "Ping-Pong" pour commercialiser des équipements.
                </p>
                break;
            case '1903':
                image = Story2;
                newText = <p>
                    <span style={{ fontFamily: 'Lunch time' }}>1903</span> <br /><span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}>Création</span> de la Fédération anglaise de tennis de table.;
                </p>
                break;
            case '1922':
                image = Story2;
                newText = <p>
                    <span style={{ fontFamily: 'Lunch time' }}>1922</span> <br /><span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}>Fondation</span> de l'Union internationale de tennis de table (UITT).;
                </p>
                break;
            case '1930-1940':
                image = Story4;
                newText = <p>
                    < span style={{ fontFamily: 'Lunch time' }}>1930-1940</span> <br /> <span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}> Popularisation</span> du ping-pong en Europe et en Asie.;
                </p>
                break;
            case '1950':
                image = Story4;
                newText = <p>
                    <span style={{ fontFamily: 'Lunch time' }}>1950</span> <br /> <span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}>Introduction </span> des balles en celluloïd et des raquettes en caoutchouc mousse.;
                </p>

                break;
            case '1960':
                image = Story4;
                newText = <p>
                    <span style={{ fontFamily: 'Lunch time' }}>1960</span> <br /> <span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}> Professionnalisation </span> du sport et domination des joueurs asiatiques.;
                </p>

                break;
            case '1970':
                image = Story4;
                newText = <p>
                    <span style={{ fontFamily: 'Lunch time' }}>1970</span> <br /> <span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}>Adoption</span> des sets de 11 points et du service alternatif.;
                </p>
                break;
            case '1990-2000':
                image = Story5;
                newText = <p>
                    <span style={{ fontFamily: 'Lunch time' }}>1990 - 2000</span> <br /> <span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}>Développement</span>de nouvelles techniques et de styles de jeu plus rapides.
                    Augmentation de la popularité du sport en Amérique du Nord et du Sud.
                    Utilisation croissante des technologies, comme la vidéo et l'analyse des données.;
                </p>

                break;
            case '2010-Today':
                image = Story5;

                newText = <p>  <span style={{ fontFamily: 'Lunch time' }}>2010-A nos Jour</span> <br /> <span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}> Le ping-pong</span>reste l'un des sports les plus populaires au monde.
                    Diversité des styles de jeu et des joueurs talentueux de toutes les régions du monde.
                    Intégration de nouvelles technologies pour améliorer l'expérience de jeu et de spectateur.;
                    Augmentation de la popularité du sport en Amérique du Nord et du Sud.
                    Utilisation croissante des technologies, comme la vidéo et l'analyse des données.;
                </p>

                break;
            case '1880-1900':
                image = Story1;
                newText =
                    <p>
                        <span style={{ fontFamily: 'Lunch time' }}>1880-1900</span> <br /><span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}>Apparition</span>du "tennis d'intérieur" en Angleterre, inspiré du tennis sur gazon.
                        Utilisation de balles en caoutchouc, de raquettes en bois et d'un filet improvisé.
                    </p>

                break;
            case '1902':
                image = Story2;
                newText =
                    <p>
                        <span style={{ fontFamily: 'Lunch time' }}>1902</span> <br /> <span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}>Premiers</span> championnats nationaux en Hongrie et en Angleterre.
                    </p>

                break;
            case '1926':
                image = Story3;
                newText =
                    <p>
                        <span style={{ fontFamily: 'Lunch time' }}>1926</span> <br /> <span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}>L'UITT</span>devient la Fédération Internationale de Tennis de Table (ITTF).;
                    </p>


                break;
            case '1927':
                image = Story4;
                newText = <p>
                    <span style={{ fontFamily: 'Lunch time' }}>1927</span> <br /> <span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}>Premiers</span>championnats du monde à Londres.
                </p>


                break;
            case '1988':
                image = Story5;
                newText =
                    <p>
                        <span style={{ fontFamily: 'Lunch time' }}>1988</span> <br /> <span style={{ fontFamily: 'Lunch time', color: '#ffc617', fontSize: '4rem' }}>Le ping-pong</span>devient une discipline olympique à Séoul.
                    </p>

                break;

        }

        setImageUrl(image);
        setText(newText);
    };


    return (

        <div id="Timeline">
            <Title>Histoire</Title>
            <TextStyle>
                <Text>{text}</Text>
            </TextStyle>
            <SliderContainer>
                <Slider>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1880-1900')}>1880-1900</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1901')} >1901</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1902')}>1902</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1903')}>1903</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1922')}>1922</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1926')}>1926</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1927')}>1927</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1930-1940')} >1930-1940</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1950')}>1950</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1960')}>1960</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1970')}>1970</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1988')}>1988</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('1990-2000')}>1990-2000</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <TimelineItem>
                        <TimelineDate onClick={() => handleDateClick('2010-Today')}>2010-Today</TimelineDate>
                        <i className="pi pi-circle-fill" style={{ color: 'white' }}></i>
                    </TimelineItem>
                </Slider>
            </SliderContainer>


        </div>


    );
};

export default TimelineSlider;

const Title = styled.h1`
    color: #ffc617;
    font-size: 46px;
    line-height: 50px;
    margin-bottom: 40px;
    font-weight: 900;
    font-family: 'Lunch time', sans-serif;
`;

const TimelineDate = styled.div`
  color: white;
  font-family: 'Lunch time', sans-serif;
  font-size: 30px;
  transition: transform 0.2s ease; 
  



&:hover {
    transform: scale(1.2); 
    font-size: 35px; 
}

`
const TimelineItem = styled.div`
  display: flex;
  justify-content: space-around;
    flex-direction: column;
    
  

`

const SliderContainer = styled.div`
  color: white;
  font-family: 'Lunch time', sans-serif;
  width: 100%;
  overflow-x: auto; 
    white-space: nowrap; 
    -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Cacher la barre de défilement pour Firefox */
  &::-webkit-scrollbar {
    display: none; /* Cacher la barre de défilement pour les navigateurs basés sur WebKit */
  }
  scroll-behavior: smooth;


`
const Slider = styled.div`
 font-family: none;
 width: 250vw;
 height: 50px;
 justify-content: space-around;
 margin: 20% 0 20% 0;
 display: flex; /* Permet aux éléments enfants de s'afficher en ligne */
 

`
const TextStyle = styled.div`    
 display: block;
  
    
`;

const Text = styled.p`
    font-size: 18px;
    line-height: 1.5;
    color: white;
   
`;