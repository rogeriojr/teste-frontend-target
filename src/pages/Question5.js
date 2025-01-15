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

const Description = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  max-width: 600px;
  line-height: 1.5;
`;

const Question5 = () => {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState("");

  const inverterString = () => {
    let invertida = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      invertida += texto[i];
    }
    setResultado(invertida);
  };

  return (
    <Wrapper>
      <Card title="Questão 5: Inversão de String">
        <Description>
          Nesta questão, você pode inserir uma string e visualizar sua versão invertida.
          Ao clicar no botão "Inverter", o sistema processará o texto e exibirá o resultado.
          Por exemplo: Se você digitar "BeeFood", o resultado será "dooFeeB".
        </Description>
        <Input
          type="text"
          placeholder="Digite uma string"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <Button onClick={inverterString}>Inverter</Button>
        {resultado && <h3>Resultado: {resultado}</h3>}
      </Card>
    </Wrapper>
  );
};

export default Question5;
