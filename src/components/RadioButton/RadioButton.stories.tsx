import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

const meta: Meta<RadioButtonProps> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<RadioButtonProps>;

export const Default: Story = {
  args: {
    label: 'Option A',
    name: 'group1',
    checked: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Option',
    name: 'group1',
    checked: false,
    disabled: true,
  },
};

