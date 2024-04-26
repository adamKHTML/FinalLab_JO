import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import { FIREBASE_AUTH } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const handleLogout = () => {
        FIREBASE_AUTH.signOut()
            .then(() => {
                navigate('/');
                console.log('Déconnexion réussie');

            })
            .catch((error) => {
                console.error('Erreur lors de la déconnexion:', error);
            });
    };


    return (
        <CustomNavbar scrolled={scrolled ? 'true' : undefined} expand="lg" fixed="top">
            <CustomContainer>
                <CustomNavbarBrand scrolled={scrolled ? 'true' : undefined}>

                </CustomNavbarBrand>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </CustomContainer>
        </CustomNavbar>
    );
};

const CustomNavbar = styled(Navbar)`
  &&& {
    background-color: ${({ scrolled }) => (scrolled ? 'white' : '#51438f')};
    transition: background-color 0.3s ease-in-out;
  }

`;

const CustomContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
 
`;

const CustomNavbarBrand = styled(Navbar.Brand)`
  color: ${({ scrolled }) => (scrolled ? '#3f3a64' : '#e9e9e9')};
  display: inline-block;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #EF476F;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    color: #EF476F;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const LogoutButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    color: #EF476F;
  }
`;

export default NavBar;
