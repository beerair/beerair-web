import { Meta, StoryObj } from '@storybook/react';

import { MOCK_BEER } from '@/constants/dummy';

import BeerItem from './BeerItem';

export default {
  component: BeerItem,
  args: {
    MOCK_BEER,
  },
} as Meta<typeof BeerItem>;

export const grid: StoryObj<typeof BeerItem> = {
  args: {
    type: 'grid',
  },
};

export const list: StoryObj<typeof BeerItem> = {
  args: {
    type: 'list',
  },
};
