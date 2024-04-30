import React from 'react';
import styled from 'styled-components';

// Slide component
const Slide = ({ slide, current, handleSlideClick }) => {
    const { rank, name, age, handedness, nationality, description } = slide;

    let classNames = "slide";

    if (current === slide.index) classNames += " slide--current";

    return (
        <SlideContainer
            className={classNames}
            onClick={() => handleSlideClick(slide.index)}
        >
            <SlideContent>
                <TopPlayers>
                    <Circle />
                    <Content>
                        <Rank>{rank}</Rank>
                        <Info>
                            <p>{name}</p>
                            <p>{age}</p>
                            <p>{handedness}</p>
                            <p>{nationality}</p>
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

    const handleSlideClick = index => {
        if (current !== index) {
            setCurrent(index);
        }
    };

    return (

        <SliderContainer>
            <SliderWrapper>
                <h3 className="visuallyhidden" id="slider-heading">{heading}</h3>
                {slides.map(slide => (
                    <Slide
                        key={slide.index}
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
  justify-content: center;
  align-items: center;
`;

const SliderWrapper = styled.ul`
  display: flex;
  position: relative;
`;

const SlideContainer = styled.li`
  cursor: pointer;
  flex: 1;
  opacity: 0.25;
  transition: opacity 0.3s ease;

  &.slide--current {
    opacity: 1;
  }
`;

const SlideContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
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

// Slide data
const slideData = [
    {
        index: 0,
        rank: "Rang 1",
        name: "Xavier Aucher",
        age: "25",
        handedness: "Gaucher",
        nationality: "France",
        description: "Lorem Ipsum para bellum",
    },
    {
        index: 1,
        rank: "Rang 2",
        name: "Vales UI",
        age: "30",
        handedness: "Droitier",
        nationality: "Chine",
        description: "Lorem Ipsum dolor sit amet",
    },
    {
        index: 2,
        rank: "Rang 2",
        name: "Richard David",
        age: "30",
        handedness: "Droitier",
        nationality: "Venezuela",
        description: "Lorem Ipsum dolor sit amet",
    },
    {
        index: 3,
        rank: "Rang 2",
        name: "Richard David",
        age: "30",
        handedness: "Droitier",
        nationality: "USA",
        description: "Lorem Ipsum dolor sit amet",
    },
];

// Slider component usage
function App() {
    return (
        <div>
            <Slider heading="Example Slider" slides={slideData} />
        </div>
    );
}

export default App;
