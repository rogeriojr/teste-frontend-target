import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Navbar = styled.nav`
  background: #6200ea;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: ${(props) => (props.isOpen ? "column" : "row")};
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
  background-color: ${(props) => (props.active ? "#3700b3" : "transparent")};

  &:hover {
    background-color: #3700b3;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar>
      <Title>Teste Técnico</Title>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </MenuButton>
      <NavLinks isOpen={isOpen}>
        <StyledLink to="/" active={isActive("/") || isActive("/home")}>
          Home
        </StyledLink>
        <StyledLink to="/question1" active={isActive("/question1")}>
          Questão 1
        </StyledLink>
        <StyledLink to="/question2" active={isActive("/question2")}>
          Questão 2
        </StyledLink>
        <StyledLink to="/question3" active={isActive("/question3")}>
          Questão 3
        </StyledLink>
        <StyledLink to="/question4" active={isActive("/question4")}>
          Questão 4
        </StyledLink>
        <StyledLink to="/question5" active={isActive("/question5")}>
          Questão 5
        </StyledLink>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
