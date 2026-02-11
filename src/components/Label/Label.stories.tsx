import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';
import { LabelProps } from './Label.types';

const meta: Meta<LabelProps> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    text: 'Label text',
    color: '#333333',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled label',
    color: '#333333',
    disabled: true,
  },
};

