import { IReview } from '@/types';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReviewList from './ReviewList';

const REVIEWS: IReview[] = [
  {
    content:
      '날씨도 좋은데 놀러가지도 못하고..! 기분 내려고 한 잔 한다. 이순간 만큼은 제주다 이거야~',
    feel: 5,
    createdAt: '2022-07-22T02:55:12.151Z',
    member: { id: 1, name: '호딩' },
    flavors: [
      { id: 1, content: '목넘김이 부드러워요' },
      { id: 2, content: '목넘김이 안부드러워요' },
      { id: 3, content: '목넘김이 짱부드러워요' },
    ],
  },
  {
    content: '리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰',
    feel: 4,
    createdAt: '2022-07-20T02:55:12.151Z',
    member: { id: 1, name: '호딩2' },
    flavors: [
      { id: 1, content: '단 맛이 나요' },
      { id: 2, content: '짱 맛있어요' },
    ],
  },
  {
    content: '테스트테스트테스트',
    feel: 3,
    createdAt: '2022-06-22T02:55:12.151Z',
    member: { id: 1, name: '호딩3' },
    flavors: [{ id: 1, content: '목넘김이 부드러워요' }],
  },
];

export default {
  title: 'Components/beer-detail/ReviewList',
  component: ReviewList,
  args: { reviews: REVIEWS },
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
