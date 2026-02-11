import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';
import { ImgProps } from './Img.types';

const meta: Meta<ImgProps> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<ImgProps>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/300x150',
    alt: 'Placeholder image',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/300x150',
    alt: 'Disabled image',
    disabled: true,
  },
};

