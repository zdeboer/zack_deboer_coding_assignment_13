import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';

const renderSampleTable = (disabled = false) =>
  render(
    <Table disabled={disabled}>
      <TableHeader disabled={disabled}>
        <TableRow disabled={disabled}>
          <TableCell disabled={disabled}>Header 1</TableCell>
          <TableCell disabled={disabled}>Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow disabled={disabled}>
          <TableCell disabled={disabled}>Row 1, Cell 1</TableCell>
          <TableCell disabled={disabled}>Row 1, Cell 2</TableCell>
        </TableRow>
      </tbody>
      <TableFooter disabled={disabled}>
        <TableRow disabled={disabled}>
          <TableCell disabled={disabled}>Footer 1</TableCell>
          <TableCell disabled={disabled}>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );

describe('Table', () => {
  test('is visible with content', () => {
    renderSampleTable(false);
    expect(screen.getByText('Header 1')).toBeVisible();
    expect(screen.getByText('Row 1, Cell 1')).toBeVisible();
  });

  test('cells have grey background when disabled', () => {
    renderSampleTable(true);
    const cell = screen.getByText('Row 1, Cell 1');
    expect(cell).toHaveStyle('background-color: #cccccc');
  });
});
