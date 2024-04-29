import React from 'react';

import styled from 'styled-components';
import 'primeicons/primeicons.css';



const TimelineSlider = () => {




    return (

        <div id="Timeline">
            <Title>Histoire</Title>
            <SliderContainer>
                <Slider>
                    <TimelineItem>
                        <TimelineDate>1880-1900</TimelineDate>
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
                        <TimelineDate>1901</TimelineDate>
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
                        <TimelineDate>1902</TimelineDate>
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
                        <TimelineDate>1903</TimelineDate>
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
                        <TimelineDate>1922</TimelineDate>
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
                        <TimelineDate>1926</TimelineDate>
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
                        <TimelineDate>1927</TimelineDate>
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
                        <TimelineDate>1930-1940</TimelineDate>
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
                        <TimelineDate>1950</TimelineDate>
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
                        <TimelineDate>1960</TimelineDate>
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
                        <TimelineDate>1970</TimelineDate>
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
                        <TimelineDate>1988</TimelineDate>
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
                        <TimelineDate>1990-2000</TimelineDate>
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
                        <TimelineDate>2010-Today</TimelineDate>
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
 margin-top: 30%;
 display: flex; /* Permet aux éléments enfants de s'afficher en ligne */
 
 

`