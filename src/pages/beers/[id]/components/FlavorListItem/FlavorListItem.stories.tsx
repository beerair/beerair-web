import { ComponentStory, ComponentMeta } from '@storybook/react';

import FlavorListItem from './FlavorListItem';

export default {
  component: FlavorListItem,
  args: { content: '단 맛이나요', count: 1 },
} as ComponentMeta<typeof FlavorListItem>;

const Template: ComponentStory<typeof FlavorListItem> = ({ ...args }) => (
  <FlavorListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
