import React from 'react';
import styled from 'styled-components';
import { TableSectionProps } from './Table.types';

const StyledTfoot = styled.tfoot<{ $disabled?: boolean }>`
  background-color: ${({ $disabled }) => ($disabled ? '#cccccc' : '#f5f5f5')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
`;

export const TableFooter: React.FC<TableSectionProps> = ({ children, disabled = false }) => {
  return <StyledTfoot $disabled={disabled}>{children}</StyledTfoot>;
};
