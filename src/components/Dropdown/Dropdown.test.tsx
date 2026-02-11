import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

describe('Dropdown', () => {
  test('is visible with options', () => {
    render(<Dropdown options={options} />);
    const optionElement = screen.getByText('Option 1');
    expect(optionElement).toBeVisible();
  });

  test('has grey background when disabled', () => {
    render(<Dropdown options={options} disabled />);
    const selectElement = screen.getByDisplayValue('Option 1');
    expect(selectElement).toHaveStyle('background-color: #cccccc');
  });
});
