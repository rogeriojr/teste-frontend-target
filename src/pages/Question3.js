import React, { useState } from "react";
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

const Question3 = () => {
  const [resultado, setResultado] = useState(null);

  const analisarFaturamento = () => {
    const valoresValidos = dadosFaturamento.filter(d => d.valor > 0).map(d => d.valor);
    const menorValor = Math.min(...valoresValidos);
    const maiorValor = Math.max(...valoresValidos);
    const mediaMensal = valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;
    const diasAcimaMedia = valoresValidos.filter(val => val > mediaMensal).length;

    setResultado({ menorValor, maiorValor, diasAcimaMedia });
  };

  return (
    <Wrapper>
      <Card title="Questão 3: Análise de Faturamento">
        <Description>
          Nesta questão, analisamos os dados de faturamento de uma distribuidora para determinar:
          o menor e maior valor de faturamento em dias com registros válidos, e o número de dias
          em que o faturamento foi superior à média mensal. Clique no botão abaixo para visualizar
          os resultados.
        </Description>
        <Button onClick={analisarFaturamento}>Analisar Faturamento</Button>
        {resultado && (
          <div>
            <p>Menor Valor: R$ {resultado.menorValor.toFixed(2)}</p>
            <p>Maior Valor: R$ {resultado.maiorValor.toFixed(2)}</p>
            <p>Dias Acima da Média: {resultado.diasAcimaMedia}</p>
          </div>
        )}
      </Card>
    </Wrapper>
  );
};

export default Question3;
