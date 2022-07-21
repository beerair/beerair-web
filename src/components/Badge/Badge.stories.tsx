import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '@/components/commons/Icon';
import Badge from './Badge';

export default {
  title: 'Commons/Badge',
  component: Badge,
  argTypes: {
    label: { control: 'text', name: 'text' },
    width: { control: 'text' },
    type: { control: 'select', options: ['primary', 'secondary', 'ghost', 'default'] },
    leftAddon: { control: 'boolean' },
    rightAddon: { control: 'boolean' },
  },
  args: { likeCount: 100 },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = ({ leftAddon, rightAddon, ...args }) => (
  <Badge
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
