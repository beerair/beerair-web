import { Meta, StoryObj } from '@storybook/react';

import { MOCK_BEER } from '@/constants/dummy';

import BeerList from './BeerList';

export default {
  component: BeerList,
  args: {
    beers: Array(10)
      .fill(0)
      .map((_, index) => ({ ...MOCK_BEER, id: index + 1 })),
  },
} as Meta<typeof BeerList>;

export const Default: StoryObj<typeof BeerList> = {};
