import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem;
  text-align: center;
`;

const Card = ({ title, children }) => {
  return (
    <CardWrapper>
      <h2>{title}</h2>
      <div>{children}</div>
    </CardWrapper>
  );
};

export default Card;
