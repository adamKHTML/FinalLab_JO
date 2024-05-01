import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Slide component
const Slide = ({ slide, current, handleSlideClick }) => {
    const { index, image, ranking, firstName, lastName, age, style, country, description } = slide;

    let classNames = "slide";

    if (current === index) classNames += " slide--current";

    return (


        <SlideContainer
            className={classNames}
            onClick={() => handleSlideClick(slide.index)}
        >

            <SlideContent>
                <TopPlayers>
                    <Circle style={{ backgroundImage: `url(${image})` }} />
                    <Content>
                        <Rank>{ranking}</Rank>
                        <Info>
                            <p>{firstName} {lastName}</p>
                            <p>{age}</p>
                            <p>{style}</p>
                            <p>{country}</p>
                            <p>{description}</p>
                        </Info>
                    </Content>
                </TopPlayers>
            </SlideContent>
        </SlideContainer>

    );
};

// Slider component
const Slider = ({ slides, heading }) => {
    const [current, setCurrent] = React.useState(0);
    const sliderRef = React.useRef(null);

    const handleSlideClick = index => {
        if (current !== index) {
            setCurrent(index);
            const slideWidth = sliderRef.current.offsetWidth;
            const scrollLeft = index * slideWidth;
            sliderRef.current.style.transform = `translateX(-${scrollLeft}px)`;
        } else if (index === slides.length - 1) {
            // Si l'index est le dernier, afficher le premier joueur après le dernier joueur
            setCurrent(0);
            sliderRef.current.style.transform = `translateX(0)`;
        }
    };

    const totalWidth = slides.length * 300 + (slides.length - 1) * 10;

    return (
        <SliderContainer>
            <SliderWrapper ref={sliderRef} style={{ width: totalWidth }}>
                {slides.map((slide, index) => (

                    <Slide
                        key={index}
                        slide={slide}
                        current={current}
                        handleSlideClick={handleSlideClick}
                    />
                ))}
            </SliderWrapper>
        </SliderContainer>
    );
};

// Style components
const SliderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 0;
`;


// Utilisation de SliderWrapper avec un style de défilement horizontal
const SliderWrapper = styled.div`
  white-space: nowrap;
  display: flex;
  width: 100%;
  transition: transform 0.3s ease;

`;

const SlideContainer = styled.li`
  cursor: pointer;
  flex: 1 0 100%;
  opacity: 0.25;
  transition: opacity 0.3s ease;
  width: 200px;
  height: 400px;

  &.slide--current {
    opacity: 1;
  }
`;

const SlideContent = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: row;

`;

const Rank = styled.div`
  background-color: #000000;
  border-radius: 25px;
  height: 58px;
  width: 115px;
 
 
`;

const Info = styled.div`
  border-radius: 25px;
  background: linear-gradient(to right, #da1540, #341269);
  height: 88px;
  width: 170px;
  font-size: 12px;

  
`;

const Circle = styled.div`
  background-color: rgba(218, 21, 64, 0.43);
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 400px; 
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;

  
`;

const TopPlayers = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

// Slider component usage
function App() {
    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Players'));
                const data = [];
                let index = 0;
                querySnapshot.forEach((doc) => {
                    const player = { id: doc.id, ...doc.data(), index: index };

                    data.push(player);

                    index++;
                });

                setPlayerData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Slider heading="Example Slider" slides={playerData} />
        </div>
    );
}

export default App;
