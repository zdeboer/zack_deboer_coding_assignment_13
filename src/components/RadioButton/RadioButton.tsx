import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  background-color: ${({ $disabled }) => ($disabled ? '#cccccc' : 'transparent')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  width: 100%;
  max-width: 300px;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  checked = false,
  disabled = false,
}) => {
  return (
    <Wrapper $disabled={disabled}>
      <input type="radio" name={name} checked={checked} disabled={disabled} readOnly />
      <span>{label}</span>
    </Wrapper>
  );
};
