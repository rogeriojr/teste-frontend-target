import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";
import Question5 from "./pages/Question5";

// Estilos diretamente no App.js


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CenteredText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #333;
`;

function App() {
  return (
    <Router basename="">
      <AppWrapper>
        <Header />
        <MainContent>
          <CenteredText>Navegue pelas páginas e visualize todo conteúdo!</CenteredText>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/question1" element={<Question1 />} />
            <Route path="/question2" element={<Question2 />} />
            <Route path="/question3" element={<Question3 />} />
            <Route path="/question4" element={<Question4 />} />
            <Route path="/question5" element={<Question5 />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
