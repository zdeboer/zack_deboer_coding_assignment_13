import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';
import { TextProps } from './Text.types';

const meta: Meta<TextProps> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    content: 'Some body text goes here.',
    color: '#333333',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: 'Disabled text',
    color: '#333333',
    disabled: true,
  },
};

