import React, { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background: #6200ea;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #3700b3;
  }
`;

const Error = styled.div`
  color: red;
  margin-top: 1rem;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  max-width: 600px;
  line-height: 1.5;
`;

const Question1 = () => {
  const [indice, setIndice] = useState("");
  const [soma, setSoma] = useState(null);
  const [error, setError] = useState("");

  const calcularSoma = () => {
    if (!indice || isNaN(indice)) {
      setError("Por favor, insira um número válido.");
      return;
    }
    setError("");
    let soma = 0;
    for (let k = 0; k <= parseInt(indice); k++) {
      soma += k;
    }
    setSoma(soma);
  };

  return (
    <Wrapper>
      <Card title="Questão 1">
        <Description>
          Nesta questão, você deve calcular a soma de números de 1 até o valor do índice inserido.
          Insira um número inteiro no campo abaixo e clique no botão "Calcular Soma".
          Se o valor não for válido, uma mensagem de erro será exibida. 
          Por exemplo: Se o índice for "5", o cálculo será 1 + 2 + 3 + 4 + 5, resultando em 15.
        </Description>
        <Input
          type="text"
          placeholder="Digite o índice"
          value={indice}
          onChange={(e) => setIndice(e.target.value)}
        />
        <Button onClick={calcularSoma}>Calcular Soma</Button>
        {error && <Error>{error}</Error>}
        {soma !== null && <h3>Resultado: {soma}</h3>}
      </Card>
    </Wrapper>
  );
};

export default Question1;
