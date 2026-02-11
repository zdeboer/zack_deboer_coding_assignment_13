import React from 'react';
import styled from 'styled-components';
import { TableSectionProps } from './Table.types';

const StyledThead = styled.thead<{ $disabled?: boolean }>`
  background-color: ${({ $disabled }) => ($disabled ? '#cccccc' : '#f5f5f5')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
`;

export const TableHeader: React.FC<TableSectionProps> = ({ children, disabled = false }) => {
  return <StyledThead $disabled={disabled}>{children}</StyledThead>;
};
