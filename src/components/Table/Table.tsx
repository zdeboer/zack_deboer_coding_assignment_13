import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{ $disabled?: boolean }>`
  border-collapse: collapse;
  width: 100%;
  max-width: 600px;
  background-color: ${({ $disabled }) => ($disabled ? '#cccccc' : 'white')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  return <StyledTable $disabled={disabled}>{children}</StyledTable>;
};
