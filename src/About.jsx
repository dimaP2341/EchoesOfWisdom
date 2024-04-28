import React from "react";
import { Container } from "./App";
import styled from "styled-components";

const AboutSection = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`;

const Text = styled.div`
text-align: center;
display: flex;
flex-direction: column;
gap: 6rem;
padding: 2rem;
font-size: 1.4rem;

@media (min-width: 1410px) {
  gap: 2rem;
}

@media (min-width: 1600px) {
  gap: 1rem;
}
`;

const About = () => {
  return (
    <Container style={{height: "88.3vh"}}>
      <AboutSection>
        <Text>
        <h2>Welcome to Echoes of Wisdom</h2>
        <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio itaque odit, maiores animi, aliquam laborum consequatur expedita nobis qui nisi minima aperiam modi, odio pariatur sapiente necessitatibus magni sequi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio itaque odit, maiores animi, aliquam laborum consequatur expedita nobis qui nisi minima aperiam modi, odio pariatur sapiente necessitatibus magni sequi?</p>
        </Text>
        <img width="100%" src="../public/depositphotos_91612518-stock-photo-blog-concept-with-man-holding.jpg" alt="Blog image" />
      </AboutSection>
    </Container>
  );
};

export default About;