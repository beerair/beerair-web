import { reviews } from '@/constants/dummy';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReviewList from './ReviewList';

export default {
  title: 'Components/record/ReviewList',
  component: ReviewList,
  args: { reviews: reviews },
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
