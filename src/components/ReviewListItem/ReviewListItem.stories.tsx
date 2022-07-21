import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReviewListItem from './ReviewListItem';

export default {
  title: 'Components/ReviewListItem',
  component: ReviewListItem,
  argTypes: {
    content: { control: 'text' },
    feel: { control: 'select', options: [1, 2, 3, 4, 5] },
    createdAt: { control: 'text' },
  },
  args: {
    content:
      '날씨도 좋은데 놀러가지도 못하고..! 기분 내려고 한 잔 한다. 이순간 만큼은 제주다 이거야~',
    feel: 5,
    createdAt: '2022-07-22T02:55:12.151Z',
    member: { id: 1, name: '호딩' },
    flavors: [
      { id: 1, content: '목넘김이 부드러워요' },
      { id: 2, content: '목넘김이 안부드러워요' },
    ],
  },
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
