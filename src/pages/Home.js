import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const WelcomeCard = styled(Card)`
  margin-bottom: 2rem;
`;

const Description = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #333;

  p {
    margin-bottom: 1rem;
  }

  ul {
    text-align: left;
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin: 0.5rem 0;
  }
`;

const QuestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  padding: 1rem;
`;

const QuestionCard = styled(Link)`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #6200ea;
    margin: 0 0 1rem 0;
    font-size: 1.25rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <WelcomeCard title="Bem-vindo ao Teste Técnico Target Sistemas">
        <Description>
          <p>
            Este projeto demonstra a implementação de cinco desafios técnicos, cada um focando
            em diferentes aspectos de lógica de programação e manipulação de dados.
          </p>
          <p>O que você encontrará em cada questão:</p>
          <ul>
            <li>Questão 1: Cálculo de soma sequencial com interface interativa</li>
            <li>Questão 2: Sequência de Fibonacci com validação de números</li>
            <li>Questão 3: Cálculo de faturamento diário com análise estatística</li>
            <li>Questão 4: Cálculo de percentual de representação por estado</li>
            <li>Questão 5: Inversão de caracteres em uma string</li>
          </ul>
        </Description>
      </WelcomeCard>

      <QuestionsGrid>
        <QuestionCard to="/question1">
          <h3>Questão 1</h3>
          <p>Soma de números sequenciais com interface interativa</p>
        </QuestionCard>
        <QuestionCard to="/question2">
          <h3>Questão 2</h3>
          <p>Verificação de números na sequência de Fibonacci</p>
        </QuestionCard>
        <QuestionCard to="/question3">
          <h3>Questão 3</h3>
          <p>Análise de faturamento diário com estatísticas</p>
        </QuestionCard>
        <QuestionCard to="/question4">
          <h3>Questão 4</h3>
          <p>Cálculo de percentual de representação por estado</p>
        </QuestionCard>
        <QuestionCard to="/question5">
          <h3>Questão 5</h3>
          <p>Inversão de caracteres em uma string</p>
        </QuestionCard>
      </QuestionsGrid>
    </Wrapper>
  );
};

export default Home;
