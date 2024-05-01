import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';


const Slide = ({ slide, current, handleSlideClick }) => {
    const { index, image, ranking, firstName, lastName, age, style, country, description } = slide;

    let classNames = "slide";

    if (current === index) classNames += " slide--current";

    // Fonction pour déterminer la couleur de fond du rang
    const getRankBackgroundColor = (rank) => {
        switch (rank) {
            case 1:
                return 'conic-gradient(from -45deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)';
            case 2:
                return 'linear-gradient(45deg, #ededed, #bdbdbd)';
            case 3:
                return '#CD7F32';
            default:
                return 'black';
        }
    };

    const rankBackgroundColor = getRankBackgroundColor(ranking);

    return (


        <SlideContainer
            className={classNames}
            onClick={() => handleSlideClick(slide.index)}
        >

            <SlideContent>
                <TopPlayers>
                    <Circle style={{ backgroundImage: `url(${image})` }} />
                    <Content>
                        <Rank background={rankBackgroundColor}>{ranking}<WorkspacePremiumTwoToneIcon /></Rank>
                        <Info>
                            <p style={{ fontWeight: 'bold', fontSize: 14 }}>{firstName} {lastName}</p>
                            <Stats>
                                <a>{age} ans</a>
                                <a>{style}</a>
                                <a>{country}</a>
                            </Stats>
                            <Text>{description}</Text>

                        </Info>
                    </Content>
                </TopPlayers>
            </SlideContent>
        </SlideContainer>

    );
};


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



const SliderWrapper = styled.div`
  
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
     background: ${props => props.background};
    border-radius: 25px;
    height: 48px;
    width: 57px;
    word-wrap: break-word;
    padding: 6%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Info = styled.div`
  border-radius: 25px;
  background: linear-gradient(to right, #da1540, #341269);
  height: 200px;
    width: 360px;
  font-size: 12px;
  word-wrap: break-word;
  padding: 15px ;

  
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
  overflow: hidden;
  font-family: "Merriweather";
  font-weight: 700;
  font-style: bold;

  
`;

const TopPlayers = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;
const Stats = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom : 10px ;
 
`;
const Text = styled.div`
 font-size: 13px;

`;



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
