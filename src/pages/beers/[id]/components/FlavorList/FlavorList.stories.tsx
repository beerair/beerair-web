import { ComponentStory, ComponentMeta } from '@storybook/react';

import FlavorList from './FlavorList';

const FLAVORS = [
  {
    id: 1,
    content: '단 맛이나요',
    count: 1,
  },
  {
    id: 2,
    content: '단 맛이나요2',
    count: 2,
  },
  {
    id: 3,
    content: '단 맛이나요3',
    count: 3,
  },
];

export default {
  title: 'Components/record/FlavorList',
  component: FlavorList,
  args: { flavors: FLAVORS },
} as ComponentMeta<typeof FlavorList>;

const Template: ComponentStory<typeof FlavorList> = ({ ...args }) => <FlavorList {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div style={{ padding: '0 20px' }}>
      <Story />
    </div>
  ),
];
