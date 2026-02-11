import React from 'react';
import styled from 'styled-components';
import { TableSectionProps } from './Table.types';

const StyledTr = styled.tr<{ $disabled?: boolean }>`
  background-color: ${({ $disabled }) => ($disabled ? '#e0e0e0' : 'white')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
`;

export const TableRow: React.FC<TableSectionProps> = ({ children, disabled = false }) => {
  return <StyledTr $disabled={disabled}>{children}</StyledTr>;
};
