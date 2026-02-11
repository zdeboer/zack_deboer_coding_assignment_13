import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { HeroImage } from './HeroImage';

describe('HeroImage', () => {
  test('is visible with title', () => {
    render(
      <HeroImage
        title="Test Hero"
        subtitle="Subtitle"
        backgroundImage="test.jpg"
      />
    );
    const titleElement = screen.getByText('Test Hero');
    expect(titleElement).toBeVisible();
  });

  test('has grey background when disabled (via background-color)', () => {
    const { container } = render(
      <HeroImage
        title="Disabled Hero"
        backgroundImage="test.jpg"
        disabled
      />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle('background-color: #cccccc');
  });
});
