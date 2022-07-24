import { ComponentStory, ComponentMeta } from '@storybook/react';

import FlavorList from './FlavorList';

const FLAVORS = [
  { flavor: { id: 1, content: '목넘김이 부드러워요' }, count: 12 },
  { flavor: { id: 1, content: '목넘김이 부드러워요' }, count: 13 },
  { flavor: { id: 1, content: '목넘김이 부드러워요' }, count: 14 },
  { flavor: { id: 1, content: '목넘김이 부드러워요' }, count: 15 },
];

export default {
  title: 'Components/beer-detail/FlavorList',
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
