import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 12px;
  margin: 1.5rem;
  max-width: 800px;
  width: 100%;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h2`
  color: #6200ea;
  margin: 0 0 1.5rem 0;
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: #6200ea;
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
`;

const CardContent = styled.div`
  color: #333;
  line-height: 1.6;
  font-size: 1rem;
`;

const Card = ({ title, children }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
};

export default Card;
