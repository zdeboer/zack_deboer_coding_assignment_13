import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ $backgroundColor?: string; $disabled?: boolean }>`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #cccccc;
  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#cccccc' : $backgroundColor || 'white'};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  width: 100%;
  max-width: 300px;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledSelect $backgroundColor={backgroundColor} $disabled={disabled} disabled={disabled}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
};
