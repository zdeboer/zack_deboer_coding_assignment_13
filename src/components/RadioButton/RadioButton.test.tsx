import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  test('is visible with given label', () => {
    render(<RadioButton label="Test Radio" name="group" />);
    const labelElement = screen.getByText('Test Radio');
    expect(labelElement).toBeVisible();
  });

  test('has grey background when disabled', () => {
    render(<RadioButton label="Disabled Radio" name="group" disabled />);
    const labelElement = screen.getByText('Disabled Radio').closest('label');
    expect(labelElement).toHaveStyle('background-color: #cccccc');
  });
});
