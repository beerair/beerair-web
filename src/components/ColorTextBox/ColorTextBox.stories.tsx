import { ComponentStory, ComponentMeta } from '@storybook/react';

import ColorTextBox from './ColorTextBox';

export default {
  component: ColorTextBox,
  argTypes: {
    children: { control: 'text', name: 'text' },
    width: { control: 'text' },
    type: { control: 'select', options: ['primary', 'secondary', 'ghost', 'default'] },
    size: { control: 'select', options: ['long', 'short'] },
  },
  args: {
    children: '목넘김이 부드러워요',
  },
} as ComponentMeta<typeof ColorTextBox>;

const Template: ComponentStory<typeof ColorTextBox> = ({ ...args }) => <ColorTextBox {...args} />;

export const PrimaryLong = Template.bind({});
PrimaryLong.args = {
  type: 'primary',
  size: 'long',
};

export const DefaultLong = Template.bind({});
DefaultLong.args = {
  type: 'default',
  size: 'long',
};

export const PrimaryShort = Template.bind({});
PrimaryShort.args = {
  type: 'primary',
  size: 'short',
  children: '과일 향이 나요',
};

export const DefaultShort = Template.bind({});
DefaultShort.args = {
  type: 'default',
  size: 'short',
  children: '과일 향이 나요',
};
