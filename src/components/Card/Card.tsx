import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const CardWrapper = styled.div<{ $backgroundColor?: string; $disabled?: boolean }>`
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#cccccc' : $backgroundColor || 'white'};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    padding: 0.75rem;
  }
`;

const Title = styled.h2`
  margin: 0 0 0.5rem 0;
`;

export const Card: React.FC<CardProps> = ({
  title,
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <CardWrapper $backgroundColor={backgroundColor} $disabled={disabled}>
      <Title>{title}</Title>
      <div>{children}</div>
    </CardWrapper>
  );
};
