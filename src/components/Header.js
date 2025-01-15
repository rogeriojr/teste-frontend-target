import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  background: #6200ea;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const NavLinks = styled.div`
  a {
    margin: 0 1rem;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <Navbar>
      <h1>Teste Técnico</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/question1">Questão 1</Link>
        <Link to="/question2">Questão 2</Link>
        <Link to="/question3">Questão 3</Link>
        <Link to="/question4">Questão 4</Link>
        <Link to="/question5">Questão 5</Link>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
