import { ComponentStory, ComponentMeta } from '@storybook/react';

import { reviewList } from '@/constants/dummy';

import ReviewList from './ReviewList';

export default {
  component: ReviewList,
  args: { reviews: reviewList },
} as ComponentMeta<typeof ReviewList>;

const Template: ComponentStory<typeof ReviewList> = ({ ...args }) => <ReviewList {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <Story />
    </div>
  ),
];
