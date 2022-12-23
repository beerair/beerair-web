import { ComponentStory, ComponentMeta } from '@storybook/react';

import { review } from '@/constants/dummy';

import ReviewListItem from './ReviewListItem';

export default {
  component: ReviewListItem,
  argTypes: {
    content: { control: 'text' },
    feel: { control: 'select', options: [1, 2, 3, 4, 5] },
    createdAt: { control: 'text' },
  },
  args: review,
} as ComponentMeta<typeof ReviewListItem>;

const Template: ComponentStory<typeof ReviewListItem> = ({ ...args }) => (
  <ReviewListItem {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <Story />
    </div>
  ),
];
