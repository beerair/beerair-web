import { Meta, StoryObj } from '@storybook/react';

import { beer } from '@/constants/dummy';

import BeerItem from './BeerItem';

export default {
  component: BeerItem,
  args: {
    beer,
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
