import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';
import { ButtonProps } from './Button.types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    label: 'Click me',
    backgroundColor: '#007bff',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled button',
    backgroundColor: '#007bff',
    disabled: true,
  },
};