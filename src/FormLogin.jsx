import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { FIREBASE_AUTH } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Composant LoginScreen    
const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const auth = FIREBASE_AUTH;

    const signIn = async (e) => {
        e.preventDefault(); // Empêcher la soumission du formulaire par défaut
        setLoading(true);

        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            navigate('/admin');
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <GlobalStyle /> {/* Inclure le style global */}


            <StyledContainer>
                <StyledForm onSubmit={signIn}>
                    <h1>Connexion</h1>
                    <StyledFormGroup controlId="formBasicEmail">
                        <Form.Label>Adresse e-mail</Form.Label>
                        <StyledFormControl
                            type="email"
                            placeholder="Entrez votre e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </StyledFormGroup>

                    <StyledFormGroup controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <StyledFormControl
                            type="password"
                            placeholder="Entrez votre mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </StyledFormGroup>

                    <StyledButton variant="primary" type="submit" disabled={loading}>
                        {loading ? 'Connexion en cours...' : 'Se connecter'}
                    </StyledButton>
                </StyledForm>
            </StyledContainer>


        </>
    );
}

export default LoginScreen;

// Style global
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-image: url('/img/Login.jpeg'); // Chemin vers votre image de fond
    background-size: cover;
    background-position: center;
    overflow: hidden; // Empêche le défilement lorsque l'image de fond est affichée
  }
`;

// Styled Components
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  

 background-color: #09111c;
 color : white;
 position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 40%;
  padding: 20px;
  
`;

const StyledForm = styled(Form)`
  background-color: #09111c;
  padding: 20px;
  border-radius: 10px;
`;

const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 20px;
`;

const StyledFormControl = styled(Form.Control)`
  background-color: #09111c;
  color: white;
  border: 1px solid white;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

