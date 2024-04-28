import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";
import Button from "./styles/Button.styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`;

const TextBox = styled.div`
   width: 20rem;
   display: flex;
   justify-content: center;
   flex-direction: column;
`;

const Text = styled.div`
    font-size: 1.4rem;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: 400;
    word-wrap: normal;
    white-space: normal; /* Значение по умолчанию, разрешает переносы */
`;

const Header = styled.h2`
    margin-bottom: 1rem;
    text-align: center;
    cursor: pointer;
    font-size: 1.7rem;
    transition: all 0.5s;
    &:hover {
        transform: skew(-15deg);
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none; /* Удалить подчеркивание ссылки */
    color: inherit; /* Использовать цвет текста по умолчанию */
    text-align: center;
`;

const AppBtn = styled(Button)`
    &:hover {
        transform: scale(1.03);
        border-width: 4px;
        background-color: white;
        color: black;
    }
`;

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
  return (
    <div>
    {loading ? <Loader/> : <Container>
        <TextBox>
            <Header>Welcome to the world of ideas and inspiration!</Header>
            <Text> Our blog is a place where words are transformed into stories, and thought becomes alive. Join our community to discover new horizons of knowledge and inspiration with us.</Text>
                <StyledLink to='/'>
                   <AppBtn>
                    Click to start!
                   </AppBtn>
                </StyledLink>
        </TextBox>
        </Container>}
    </div>
  );
}

export default App;