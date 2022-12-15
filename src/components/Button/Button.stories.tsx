import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '@/components/Icon';

import Button from './Button';

export default {
  component: Button,
  argTypes: {
    children: { control: 'text', name: 'text' },
    width: { control: 'text' },
    disabled: { control: 'boolean' },
    type: { control: 'select', options: ['primary', 'secondary', 'ghost', 'default', 'grey'] },
    line: { control: 'boolean' },
    count: { control: 'number' },
    leftAddon: { control: 'boolean' },
    rightAddon: { control: 'boolean' },
    htmlType: { control: 'select', options: ['button', 'submit'] },
  },
  args: {
    children: 'button',
    htmlType: 'button',
    disabled: false,
    icon: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ leftAddon, rightAddon, ...args }) => (
  <Button
    {...args}
    leftAddon={leftAddon ? <Icon name="FlightTakeOff" /> : undefined}
    rightAddon={rightAddon ? <Icon name="FlightTakeOff" /> : undefined}
  />
);

export const 프라이머리 = Template.bind({});
프라이머리.args = {
  type: 'primary',
};

export const 세컨더리 = Template.bind({});
세컨더리.args = {
  type: 'secondary',
};

export const 고스트 = Template.bind({});
고스트.args = {
  type: 'ghost',
};

export const 디폴트 = Template.bind({});
디폴트.args = {
  type: 'default',
};

export const 그레이 = Template.bind({});
그레이.args = {
  type: 'grey',
};
