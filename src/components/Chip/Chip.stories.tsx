import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '@/components/Icon';

import Chip from './Chip';

export default {
  component: Chip,
  argTypes: {
    label: { control: 'text', name: 'text' },
    width: { control: 'text' },
    type: { control: 'select', options: ['primary', 'secondary', 'ghost', 'default'] },
    leftAddon: { control: 'boolean' },
    rightAddon: { control: 'boolean' },
  },
  args: { likeCount: 100 },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = ({ leftAddon, rightAddon, ...args }) => (
  <Chip
    {...args}
    leftAddon={leftAddon ? <Icon name="Like" /> : undefined}
    rightAddon={rightAddon ? <Icon name="Like" /> : undefined}
  />
);

export const Default = Template.bind({});
Default.args = {
  label: '과일 향이 나요',
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: '과일 향이 나요',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: '과일 향이 나요',
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
  label: '과일 향이 나요',
};
