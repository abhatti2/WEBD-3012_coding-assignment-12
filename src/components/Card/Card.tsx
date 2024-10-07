import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CardBody = styled.p`
  font-size: 16px;
  color: #555;
`;

const Card: React.FC<CardProps> = ({ title, body }) => (
  <StyledCard>
    <CardTitle>{title}</CardTitle>
    <CardBody>{body}</CardBody>
  </StyledCard>
);

export default Card;
