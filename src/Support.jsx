import React from "react";
import Button from "./styles/Button.styled";
import { Container } from "./App";
import styled from "styled-components";
import Input from "./styles/Input.styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SupportContainer = styled(Container)`
height: 88.3vh;
`;

const SupportCard = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
justify-content: center;
align-items: center;
width: 24rem;
padding: 2rem 4rem;
border: 3px solid black;
border-radius: 0.4rem;
`;

export const SupportBtn = styled(Button)`
&:hover {
  background-color: white;
  color: black;
}
`;

const Support = () => {
  return (
    <SupportContainer>
      <SupportCard>
      <svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 24 24"><path d="M11 9c1.361-5.928 8-7 8-7v-2l4 3.982-4 4.018v-2s-5.102-.104-8 3zm5 1h-10v1h10v-1zm3 .835v2.708c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h10.741c1.176-.758 2.35-1.242 3.259-1.541v-.459h-16v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-5.561l-2 2.01zm-13 3.165h10v-1h-10v1zm3.609-7h-3.609v1h3.266l.343-1z"/></svg>
      <h2>Support & Feedback</h2>
      <p>If you need help, please contact us.To share product feedback on our products, please <a href="#">visit our community here</a>.</p>
      <Form action="">
        <Input type="email" placeholder="Enter your email"/>
        <textarea cols="30" rows="10"></textarea>
        <SupportBtn>Send</SupportBtn>
      </Form>
      </SupportCard>
    </SupportContainer>
  );
};

export default Support;