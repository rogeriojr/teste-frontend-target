import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Heading = styled.h1`
  color: #6200ea;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  max-width: 600px;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #6200ea;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3700b3;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Heading>Bem-vindo ao Teste Técnico</Heading>
      <Description>
        Este projeto foi desenvolvido para resolver uma série de desafios técnicos, organizados
        em cinco questões. Cada questão aborda um conceito importante, como cálculos
        incrementais, sequência de Fibonacci, análise de dados e muito mais.
      </Description>
      <Card title="Navegue pelos Testes">
        <LinksWrapper>
          <StyledLink to="/question1">Questão 1</StyledLink>
          <StyledLink to="/question2">Questão 2</StyledLink>
          <StyledLink to="/question3">Questão 3</StyledLink>
          <StyledLink to="/question4">Questão 4</StyledLink>
          <StyledLink to="/question5">Questão 5</StyledLink>
        </LinksWrapper>
      </Card>
    </Wrapper>
  );
};

export default Home;
