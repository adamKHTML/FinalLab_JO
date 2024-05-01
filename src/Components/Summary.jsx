import React, { useState } from 'react';
import styled from 'styled-components';


const Summary = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [content, setContent] = useState(null);

  // Fonction pour gérer le clic sur un élément de navigation
  const handleNavItemClick = (index) => {

    setActiveItem(activeItem === index ? null : index);



    if (index === 1) {
      setContent(
        <div>
          <Title>Les Frères Lebrun : Un Duo Déterminé à Conquérir le Top 5 Mondial</Title>
          <p>Les frères Lebrun, Alexis et Félix, sont deux prodiges du tennis de table français qui font sensation depuis leur plus jeune âge.</p>
        </div>
      );
    } else if (index === 2) {
      setContent(
        <div>
          <Title>Les Frères Lebrun : Un Duo Déterminé à Conquérir le Top 5 Mondial</Title>
          <p>Leur parcours atypique les démarque des autres pongistes : ils n'ont jamais intégré les filières classiques de haut niveau, privilégiant un entraînement individualisé au pôle espoir de Montpellier. Un choix payant, car ils gravissent les échelons à une vitesse fulgurante. Alexis, double champion de France, atteint la 20e place mondiale en mars 2024, tandis que Félix, à seulement 17 ans, se classe 5e mondial, devenant le 3e plus jeune joueur à atteindre ce rang. Ensemble, ils forment une équipe redoutable et visent les plus grands titres internationaux.</p>
        </div>
      );
    }

  };


  return (
    <Layout>
      <LayoutBackdrop />
      <LayoutFrontdrop />
      <LayoutWrapper>
        <LayoutHeader>
          <Nav>
            <NavItem>
              <NavLink href="#1" onClick={() => handleNavItemClick(1)}>Histoire</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#2" onClick={() => handleNavItemClick(2)}>Parcours</NavLink>
            </NavItem>
          </Nav>
        </LayoutHeader>
        <LayoutMain>
          <SubMenu style={{ display: activeItem ? 'flex' : 'none' }}>
            {content}
          </SubMenu>
          <HeroSection>
            <HeroText>
              <a href="https://codepen.io/pen?template=PMbwKb" target="#"></a> and make something nice with it. The content inspired me some kind of advertising adgency with a bold navigation and a little content. Made me work on my hover and active state more than what I'm used to in those weekly challenges.
            </HeroText>
          </HeroSection>
        </LayoutMain>
      </LayoutWrapper>
    </Layout>
  );
};

const Layout = styled.div`
   height: 100vh;
   color: white;
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

const LayoutHeader = styled.header`
  height: 100%;
  z-index: 2;
  display: flex;
    flex-direction: row-reverse;
    align-items: center;
`;

const Nav = styled.nav`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
`;

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

const LayoutMain = styled.main`
  transition: opacity .3s;
  z-index: 1;
  display: flex;
  flex-direction: column;
  grid-column: span 3;
  align-items: flex-end;

  &.layout.nav--active {
    opacity: .2;
    user-select: none;
  }
`;

const HeroSection = styled.section`
  padding-top: 10rem;
  height: 20px;
`;

const HeroText = styled.p`
  
    visibility: hidden;
  font-size: .92rem;
  line-height: 1.75;
  margin: 0;
`;

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px repeat(3, 1fr);
  margin: auto;
  height: 100%;
`;

const SubMenu = styled.div`
  list-style: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.56);
 
    
    align-items: center;
    padding: 18%;
  top: 0;
  left: 0;
  width: 67%;
  height: 96vh;
  transition: transform 0.5s ease-in-out;
  
`;

const Title = styled.h1`
 
     
    color: #ffc617;
    font-size: 46px;
    line-height: 50px;
    font-weight: 900;
    font-family: 'Lunch time', sans-serif;
    
   
    
`;

export default Summary;
