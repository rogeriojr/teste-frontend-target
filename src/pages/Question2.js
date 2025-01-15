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

const Question2 = () => {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const verificarFibonacci = () => {
    if (!numero || isNaN(numero)) {
      setError("Por favor, insira um número válido.");
      return;
    }
    setError("");
    let a = 0,
      b = 1;
    while (b <= numero) {
      if (b === parseInt(numero)) {
        setResultado("O número pertence à sequência de Fibonacci.");
        return;
      }
      [a, b] = [b, a + b];
    }
    setResultado("O número não pertence à sequência de Fibonacci.");
  };

  return (
    <Wrapper>
      <Card title="Questão 2: Fibonacci">
        <Description>
          Nesta questão, você deve verificar se um número pertence à sequência de Fibonacci.
          Insira um número inteiro no campo abaixo e clique no botão "Verificar". A sequência de
          Fibonacci inicia com 0 e 1, e os próximos números são sempre a soma dos dois anteriores.
          Por exemplo, se o número inserido for `21`, o sistema retornará que ele pertence à sequência.
        </Description>
        <Input
          type="text"
          placeholder="Digite um número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <Button onClick={verificarFibonacci}>Verificar</Button>
        {error && <Error>{error}</Error>}
        {resultado && <h3>{resultado}</h3>}
      </Card>
    </Wrapper>
  );
};

export default Question2;
