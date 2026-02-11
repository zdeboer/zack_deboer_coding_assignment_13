import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Card } from './Card';

describe('Card', () => {
  test('is visible with title', () => {
    render(<Card title="Test Card">Content</Card>);
    const titleElement = screen.getByText('Test Card');
    expect(titleElement).toBeVisible();
  });

  test('has grey background when disabled', () => {
    const { container } = render(
      <Card title="Disabled Card" disabled>
        Content
      </Card>
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveStyle('background-color: #cccccc');
  });
});
