import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderContainer>

            <HeaderContent>
                <div className="link-btg">
                    <SocialLinks className="flex items-center space-x-4">
                        <Link to="/formulaire" style={{ textDecoration: 'none', color: 'inherit' }}>


                            Connexion

                        </Link>
                        <a href="https://www.instagram.com/ffttofficiel" target='_blank' className="text-white">Instagram</a>
                        <a href="https://www.facebook.com/FFTTofficiel" target='_blank' className="text-white">FaceBook</a>
                    </SocialLinks>
                    <div style={{ color: '#ffc617', fontSize: '2rem', fontFamily: 'Lunch time, sans-serif', textAlign: 'center' }}>
                        Ping Pong <br />Stories
                    </div>
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
  position: relative;
  transition: 0.3s ease-in-out;
  height: 191px;
  background-color: transparent;
  
`;


const HeaderContent = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem; 
  box-sizing: border-box;
  color: white;
  z-index: 1; 
 
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    font-family: 'Lunch time', sans-serif;
`;
