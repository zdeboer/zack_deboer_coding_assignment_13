import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';
import { DropdownProps } from './Dropdown.types';

const meta: Meta<DropdownProps> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<DropdownProps>;

const sampleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    backgroundColor: 'white',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    backgroundColor: 'white',
    disabled: true,
  },
};

