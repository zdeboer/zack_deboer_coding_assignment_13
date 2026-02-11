import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';
import { CardProps } from './Card.types';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    backgroundColor: 'white',
    disabled: false,
    children: 'This is some card content.',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    backgroundColor: 'white',
    disabled: true,
    children: 'This card is disabled.',
  },
};

