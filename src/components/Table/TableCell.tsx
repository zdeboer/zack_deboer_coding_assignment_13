import React from 'react';
import styled from 'styled-components';
import { TableSectionProps } from './Table.types';

const StyledTd = styled.td<{ $disabled?: boolean }>`
  border: 1px solid #dddddd;
  padding: 0.5rem;
  background-color: ${({ $disabled }) => ($disabled ? '#cccccc' : 'white')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
`;

export const TableCell: React.FC<TableSectionProps> = ({ children, disabled = false }) => {
  return <StyledTd $disabled={disabled}>{children}</StyledTd>;
};
