import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Img } from './Img';

describe('Img', () => {
  test('is visible with given alt text', () => {
    render(<Img src="test.jpg" alt="Test Image" />);
    const imgElement = screen.getByAltText('Test Image');
    expect(imgElement).toBeVisible();
  });

  test('wrapper has grey background when disabled', () => {
    render(<Img src="test.jpg" alt="Disabled Image" disabled />);
    const imgElement = screen.getByAltText('Disabled Image');
    const wrapper = imgElement.parentElement;
    expect(wrapper).toHaveStyle('background-color: #cccccc');
  });
});
