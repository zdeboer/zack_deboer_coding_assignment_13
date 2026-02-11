import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './Button';

describe('Button component', () => {
  test('is visible with given label', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeVisible();
  });

  test('has grey background when disabled', () => {
    render(<Button label="Disabled Button" disabled />);
    const buttonElement = screen.getByText('Disabled Button');
    expect(buttonElement).toHaveStyle(`background-color: #cccccc`);
    expect(buttonElement).toHaveStyle(`cursor: not-allowed`);
  });
});