import { ComponentStory, ComponentMeta } from '@storybook/react';

import * as icon from '@/assets/icon';
import { theme } from '@/themes';

import Icon from './Icon';

const nameOptions = Object.keys(icon);
const colorOptions = Object.keys(theme.color);
const semanticColorOptions = Object.keys(theme.semanticColor);

export default {
  title: 'Commons/Icon',
  argTypes: {
    name: { control: 'select', options: nameOptions },
    color: { control: 'select', options: colorOptions },
    semanticColor: { control: 'select', options: semanticColorOptions },
    size: { control: 'number', name: 'size(px)' },
    width: { control: 'text', name: 'width(px)' },
    height: { control: 'text', name: 'height(px)' },
  },
  args: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ ...args }) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Plus',
  color: 'blue',
  size: 30,
};
