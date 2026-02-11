import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

const meta: Meta<HeroImageProps> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundImage: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<HeroImageProps>;

export const Default: Story = {
  args: {
    title: 'Hero Title',
    subtitle: 'Hero subtitle text',
    backgroundImage: "https://img.freepik.com/free-vector/young-superhero-boy-costume_1308-168746.jpg?semt=ais_wordcount_boost&w=740&q=80",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Hero',
    subtitle: 'This hero is disabled',
    backgroundImage: 'https://via.placeholder.com/800x200',
    disabled: true,
  },
};

