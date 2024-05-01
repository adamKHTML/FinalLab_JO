import React, { useState } from 'react';
import styled from 'styled-components';

// Composant principal de la mise en page

const Summary = () => {
  const [activeItem, setActiveItem] = useState(null);




  // Fonction pour gérer le clic sur un élément de navigation
  const handleNavItemClick = (index) => {
    // Si l'élément actif est le même que l'index, le désactive
    setActiveItem(activeItem === index ? null : index);

  };

  return (
    <Layout>
      <LayoutBackdrop />
      <LayoutFrontdrop />
      <LayoutWrapper>
        <LayoutHeader>
          <Nav>


            <NavItem>
              <NavLink href="#0" onClick={() => handleNavItemClick(3)}>Les frères rivaux</NavLink>
              <ul >
                <SubMenu style={{ display: activeItem === 3 ? 'block' : 'none' }}>
                  <NavItem>

                  </NavItem>
                </SubMenu>
              </ul>
            </NavItem>
            <NavItem>
              <NavLink href="#0" onClick={() => handleNavItemClick(4)}>Classements</NavLink>
              <ul>
                <SubMenu style={{ display: activeItem === 4 ? 'block' : 'none' }}>
                  <NavItem>
                    <NavLink href="#0">WANG Chuqin</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#0">FAN Zhendong</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#0">LIANG Jingkun</NavLink>
                  </NavItem>
                </SubMenu>
              </ul>
            </NavItem>
            <NavItem>
              <NavLink href="#0" onClick={() => handleNavItemClick(5)}>Moment fort</NavLink>
            </NavItem>
          </Nav>
        </LayoutHeader>
        <LayoutMain>
          <HeroSection>
            <HeroBlock>
              <HeroTitle>

              </HeroTitle>
              <HeroText>
                <a href="https://codepen.io/pen?template=PMbwKb" target="_blank"></a> and make something nice with it. The content inspired me some kind of advertising adgency with a bold navigation and a little content. Made me work on my hover and active state more than what I'm used to in those weekly challenges.
              </HeroText>
            </HeroBlock>
          </HeroSection>
        </LayoutMain>
      </LayoutWrapper>
    </Layout>
  );
};

const Layout = styled.div`
   height: 100vh;
`;

const LayoutBackdrop = styled.div`
  background-color: rgba(0, 0, 0, .3);
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: fixed;
  transform-origin: 0% 50%;
  width: 100%;
  z-index: 0;
  transform: scaleX(.34) translateX(calc(67% * 3));
`;

// Composant pour l'avant-plan de la mise en page
const LayoutFrontdrop = styled.div`
  background-color: var(--ccft-cs-primary-alt);
  visibility: hidden;
  opacity: 0;
  z-index: 2;

  &.layout.nav--active {
    background-color: var(--ccft-cs-primary-alt);
    visibility: visible;
  }
`;

// Composant pour l'en-tête de la mise en page
const LayoutHeader = styled.header`
  height: 100%;
  z-index: 2;
`;

// Composant pour la liste de navigation principale
const Nav = styled.nav`
  list-style: none;
  margin: 0;
  padding: 0;
`;

// Composant pour un élément de navigation
const NavItem = styled.li`
  position: relative;
`;

// Composant pour un lien de navigation
const NavLink = styled.a`
  color: var(--ccft-cs-on-surface);
  display: block;
  font-family: var(--ccft-ts-secondary);
  font-size: 1.75rem;
  line-height: 1;
  letter-spacing: .045em;
  padding: 1rem 1rem;
  padding-left: 3rem;
  padding-top: 3rem;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: transform .2s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  z-index: 1;

  &::before {
    content: counter(n, decimal-leading-zero);
    display: block;
    font-family: var(--ccft-ts-primary);
    font-size: 6rem;
    font-weight: bold;
    left: 0;
    top: 0;
    opacity: .25;
    position: absolute;
    transition: transform .2s;
    z-index: -1;
  }

  &:hover,
  &.nav__item--active > & {
    color: var(--ccft-cs-primary);
    transform: translateX(.5rem);
  }
`;

// Composant pour le contenu principal de la mise en page
const LayoutMain = styled.main`
  transition: opacity .3s;
  z-index: 1;
  display: flex;
  flex-direction: column;
  grid-column: span 3;

  &.layout.nav--active {
    opacity: .2;
    user-select: none;
  }
`;

// Composant pour la section de héros
const HeroSection = styled.section`
  padding-top: 10rem;
`;

// Composant pour un bloc de héros
const HeroBlock = styled.div`
  background-color: rgba(0, 0, 0, .3);
  margin-left: auto;
  margin-right: 6rem;
  padding: 5rem 3rem 3rem;
  transform: translateY(-3rem);
  width: 50%;
  z-index: 0;
`;

// Composant pour le titre de héros
const HeroTitle = styled.h1`
  color: #fff;
  font-family: var(--ccft-ts-secondary);
  font-weight: 400;
  font-size: 4.75rem;
  line-height: 1.2;
  margin-bottom: 0;
  position: relative;
  width: 32.5rem;
  z-index: 1;

  & em {
    display: block;
    font-size: 2rem;
    font-style: normal;
    line-height: 1.2;
    transform: translateX(2.5rem);
  }
`;

// Composant pour le texte de héros
const HeroText = styled.p`
  color: #fff;
  font-size: .92rem;
  line-height: 1.75;
  margin: 0;
`;

// Composant pour le wrapper de la mise en page
const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px repeat(3, 1fr);
  margin: auto;
  height: 100%;
`;

const SubMenu = styled.ul`
  list-style: none;
  padding: 0;
  background-color: rgba(252, 120, 79, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  width: 65%;
  height: 100vh;
  transition: transform 0.5s ease-in-out;
  z-index: 99;
`;

export default Summary;
