import { ComponentStory, ComponentMeta } from '@storybook/react';

import FlavorListItem from './FlavorListItem';

export default {
  title: 'Components/beer-detail/FlavorListItem',
  component: FlavorListItem,
  args: {
    flavor: { id: 1, content: '목넘김이 부드러워요' },
    count: 12,
  },
} as ComponentMeta<typeof FlavorListItem>;

const Template: ComponentStory<typeof FlavorListItem> = ({ ...args }) => (
  <FlavorListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
