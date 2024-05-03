import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RGPDPage = () => {
    const [accepted, setAccepted] = useState(false);

    const handleAcceptance = () => {
        setAccepted(true);
    };

    return (
        <Page>
            <Container>
                <Content>
                    <Title> Règlement Général sur la Protection des Données</Title>
                    <CheckboxLabel>
                        <Checkbox type="checkbox" checked={accepted} onChange={handleAcceptance} />
                        Politique de Confidentialité et Conformité au RGPD

                        Cette Politique de Confidentialité décrit comment Swair Inc. collecte, utilise et protège les informations personnelles que vous nous fournissez lorsque vous utilisez notre site web.

                        Collecte d'Informations Personnelles

                        Nous collectons différentes informations lorsque vous utilisez notre site web, y compris votre nom, votre adresse e-mail, votre adresse IP, et d'autres informations que vous choisissez de nous fournir.

                        Utilisation des Informations

                        Nous utilisons les informations que nous collectons pour comprendre vos besoins et vous fournir un meilleur service, notamment en répondant à vos demandes, en améliorant notre site web et nos services, et en vous envoyant des informations par e-mail sur nos produits, offres spéciales ou autres informations susceptibles de vous intéresser.

                        Protection des Informations Personnelles

                        Nous nous engageons à protéger vos informations personnelles et à les utiliser uniquement dans le cadre prévu par la loi. Nous ne vendrons, ne louerons ni ne partagerons vos informations personnelles avec des tiers sans votre consentement préalable, sauf si la loi l'exige.

                        Droits des Utilisateurs

                        Conformément au Règlement Général sur la Protection des Données (RGPD), vous avez le droit d'accéder à vos informations personnelles, de les rectifier, de les supprimer ou de vous opposer à leur traitement. Pour exercer ces droits, veuillez nous contacter à konateadam265@gmail.com.

                        Consentement

                        En utilisant notre site web, vous consentez à notre Politique de Confidentialité et à notre utilisation de vos informations personnelles conformément aux lois applicables en matière de protection des données.

                        <br /> J'accepte les conditions RGPD.
                    </CheckboxLabel>
                    {accepted && (
                        <StyledLink to="/">Continuer</StyledLink>
                    )}
                </Content>
            </Container>
        </Page>
    );
};

const Page = styled.div`
  background: linear-gradient(to bottom right, #007bff, #8a2be2);
  height: 100vh;
  width: 1536px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
`;

const Content = styled.div``;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column-reverse;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default RGPDPage;
