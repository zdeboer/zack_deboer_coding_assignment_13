import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ $backgroundColor?: string; $disabled?: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#cccccc' : $backgroundColor || '#007bff'};
  color: white;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  width: 100%;
  max-width: 300px;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  backgroundColor,
  onClick,
}) => {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {label}
    </StyledButton>
  );
};
