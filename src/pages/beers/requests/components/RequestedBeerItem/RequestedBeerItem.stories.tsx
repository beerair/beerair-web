import { REQUEST_BEER_STATUS } from '@/types';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import RequestedBeerItem from './RequestedBeerItem';

export default {
  component: RequestedBeerItem,
  args: {
    beerName: '하이네켄 벚꽃 맥주',
    createdAt: '2022-06-21T02:55:12.151Z',
  },
} as ComponentMeta<typeof RequestedBeerItem>;

export const 심사중: ComponentStoryObj<typeof RequestedBeerItem> = {
  args: {
    status: REQUEST_BEER_STATUS.PENDING,
  },
};

export const 등록완료: ComponentStoryObj<typeof RequestedBeerItem> = {
  args: {
    status: REQUEST_BEER_STATUS.APPROVED,
    requestCompletedAt: '2022-06-21T02:55:12.151Z',
  },
};

export const 반려: ComponentStoryObj<typeof RequestedBeerItem> = {
  args: {
    status: REQUEST_BEER_STATUS.REJECTED,
    requestCompletedAt: '2022-06-21T02:55:12.151Z',
  },
};
