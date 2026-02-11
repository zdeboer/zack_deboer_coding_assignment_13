import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ $color?: string; $disabled?: boolean }>`
  margin: 0;
  padding: 0.5rem;
  color: ${({ $color }) => $color || '#333333'};
  background-color: ${({ $disabled }) => ($disabled ? '#cccccc' : 'transparent')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'text')};
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

export const Text: React.FC<TextProps> = ({ content, disabled = false, color }) => {
  return (
    <StyledText $color={color} $disabled={disabled}>
      {content}
    </StyledText>
  );
};
