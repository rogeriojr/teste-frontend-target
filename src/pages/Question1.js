import React, { useState } from "react";
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

const Input = styled.input`
  padding: 0.75rem 1rem;
  margin: 1rem 0;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #6200ea;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  margin: 1rem 0;
  background: #6200ea;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: #3700b3;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Error = styled.div`
  color: #d32f2f;
  background: #ffebee;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-size: 0.9rem;
  width: 100%;
  max-width: 300px;
  text-align: center;
`;

const Result = styled.div`
  background: #f3e5f5;
  color: #6200ea;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  max-width: 300px;
  animation: fadeIn 0.3s ease-in;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Example = styled.div`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-size: 0.9rem;
  line-height: 1.6;
  width: 100%;
  max-width: 600px;

  code {
    background: #e0e0e0;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
  }
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
      <Card title="Soma de Números Sequenciais">
        <Example>
          <strong>Descrição:</strong>
          <p>Esta questão calcula a soma de todos os números de 1 até o número que você inserir.</p>
          <strong>Exemplo:</strong>
          <p>Se você inserir <code>5</code>, o cálculo será: <code>1 + 2 + 3 + 4 + 5 = 15</code></p>
          <strong>Como usar:</strong>
          <ol>
            <li>Digite um número inteiro positivo no campo abaixo</li>
            <li>Clique em "Calcular Soma" para ver o resultado</li>
          </ol>
        </Example>

        <Input
          type="number"
          placeholder="Digite um número"
          value={indice}
          onChange={(e) => setIndice(e.target.value)}
          min="0"
        />
        <Button onClick={calcularSoma}>Calcular Soma</Button>
        {error && <Error>{error}</Error>}
        {soma !== null && (
          <Result>
            A soma dos números de 1 até {indice} é: {soma}
          </Result>
        )}
      </Card>
    </Wrapper>
  );
};

export default Question1;
