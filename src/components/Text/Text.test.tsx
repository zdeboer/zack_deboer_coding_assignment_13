import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Text } from './Text';

describe('Text', () => {
  test('is visible with given content', () => {
    render(<Text content="Test Text" />);
    const textElement = screen.getByText('Test Text');
    expect(textElement).toBeVisible();
  });

  test('has grey background when disabled', () => {
    render(<Text content="Disabled Text" disabled />);
    const textElement = screen.getByText('Disabled Text');
    expect(textElement).toHaveStyle('background-color: #cccccc');
  });
});
