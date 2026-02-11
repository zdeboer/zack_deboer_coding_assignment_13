import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.span<{ $color?: string; $disabled?: boolean }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  color: ${({ $color }) => $color || '#333333'};
  background-color: ${({ $disabled }) => ($disabled ? '#cccccc' : 'transparent')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  width: 100%;
  max-width: 300px;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const Label: React.FC<LabelProps> = ({ text, disabled = false, color }) => {
  return (
    <StyledLabel $color={color} $disabled={disabled}>
      {text}
    </StyledLabel>
  );
};
