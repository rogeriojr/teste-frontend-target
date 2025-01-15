import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import dadosFaturamento from "../data/faturamento.json";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
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

const Question4 = () => {
  const [resultado, setResultado] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (dadosFaturamento.length > 0) {
      setIsDataLoaded(true);
    }
  }, []);

  const calcularPercentual = () => {
    if (!isDataLoaded) return;

    const estados = {
      SP: 0,
      RJ: 0,
      MG: 0,
      ES: 0,
      Outros: 0,
    };

    // Distribuindo valores proporcionalmente (simulação)
    dadosFaturamento.forEach((dia, index) => {
      if (index % 5 === 0) estados.SP += dia.valor;
      else if (index % 5 === 1) estados.RJ += dia.valor;
      else if (index % 5 === 2) estados.MG += dia.valor;
      else if (index % 5 === 3) estados.ES += dia.valor;
      else estados.Outros += dia.valor;
    });

    const total = Object.values(estados).reduce((acc, val) => acc + val, 0);
    const percentualPorEstado = {};

    for (const estado in estados) {
      percentualPorEstado[estado] = ((estados[estado] / total) * 100).toFixed(2) + "%";
    }

    setResultado(percentualPorEstado);
  };

  return (
    <Wrapper>
      <Card title="Questão 4: Percentual por Estado">
        <Description>
          Nesta questão, o percentual de participação no faturamento é calculado com base nos dados diários
          de faturamento. Clique no botão abaixo para visualizar os percentuais por estado.
        </Description>
        <Button onClick={calcularPercentual}>Calcular Percentuais</Button>
        {resultado && (
          <div>
            {Object.keys(resultado).map((estado) => (
              <p key={estado}>
                {estado}: {resultado[estado]}
              </p>
            ))}
          </div>
        )}
      </Card>
    </Wrapper>
  );
};

export default Question4;
