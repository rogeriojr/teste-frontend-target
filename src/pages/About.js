import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  line-height: 1.6;
  font-size: 1.1rem;

  h2 {
    color: #6200ea;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: #333;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;

    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: "•";
        color: #6200ea;
        position: absolute;
        left: 0;
      }
    }
  }
`;

const ProfileLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const ProfileLink = styled.a`
  background: #6200ea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #3700b3;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Card title="Sobre Mim">
        <Content>
          <p>
            Sou um desenvolvedor comprometido e leal, com anos de experiência no desenvolvimento
            de soluções tecnológicas. Atualmente, estou em busca de uma nova oportunidade
            para contribuir com minha expertise e dedicação.
          </p>
          <p>
            Minha experiência inclui desenvolvimento de:
          </p>
          <ul>
            <li>Apps Android e iOS para startups</li>
            <li>Plataformas E-commerce</li>
            <li>Dashboards e Painéis Administrativos</li>
            <li>Sistemas de Caixa</li>
            <li>Aplicações para Supermercados</li>
            <li>Plataformas de Cursos</li>
            <li>Aplicações para Área da Saúde e Ensino</li>
          </ul>
          <p>
            Um dos projetos mais marcantes da minha carreira foi o desenvolvimento de um
            sistema de gestão hospitalar para escalas médicas durante a pandemia. Foi uma
            experiência desafiadora que demonstrou o impacto direto do meu trabalho na
            vida das pessoas, exigindo dedicação extra, trabalho em equipe e excelente
            comunicação.
          </p>

          <h2>Tecnologias</h2>
          <ul>
            <li>Frontend: React, Vue.js, HTML5, CSS3, JavaScript</li>
            <li>Backend: Node.js, Express, Python, Java</li>
            <li>Banco de Dados: MongoDB, PostgreSQL, MySQL</li>
            <li>Ferramentas: Git, Docker, AWS, Azure</li>
          </ul>

          <ProfileLinks>
            <ProfileLink href="https://www.linkedin.com/in/rogério-júnior-174719120/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </ProfileLink>
            <ProfileLink href="https://github.com/rogeriojr" target="_blank" rel="noopener noreferrer">
              GitHub
            </ProfileLink>
            <ProfileLink href="https://rj-dev.wuaze.com/" target="_blank" rel="noopener noreferrer">
              Portfolio Antigo
            </ProfileLink>
            <ProfileLink href="https://rj-dev-portfolio-20.vercel.app/" target="_blank" rel="noopener noreferrer">
              Portfolio Novo
            </ProfileLink>
            <ProfileLink href="https://www.workana.com/freelancer/5aea67e6fd911e0c207642b63c50fb9d" target="_blank" rel="noopener noreferrer">
              Workana
            </ProfileLink>
          </ProfileLinks>
        </Content>
      </Card>
    </Wrapper>
  );
};

export default About;