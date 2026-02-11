import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Label } from './Label';

describe('Label', () => {
  test('is visible with given text', () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeVisible();
  });

  test('has grey background when disabled', () => {
    render(<Label text="Disabled Label" disabled />);
    const labelElement = screen.getByText('Disabled Label');
    expect(labelElement).toHaveStyle('background-color: #cccccc');
  });
});
