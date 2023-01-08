import { Meta, StoryObj, ComponentStory } from '@storybook/react';

import BeerCountryFilterList from './BeerCountryFilterList';
import BeerCountryFilterTab from './BeerCountryFilterTab';
import BeerListFilterBottomSheet from './BeerListFilterBottomSheet';
import BeerTypeFilterList from './BeerTypeFilterList';

export default {
  component: BeerListFilterBottomSheet,
  args: {
    open: { control: 'boolean', defaultValue: true },
  },
} as Meta<typeof BeerListFilterBottomSheet>;

export const 기본: StoryObj<typeof BeerListFilterBottomSheet> = {};

export const 종류_필터_목록: ComponentStory<typeof BeerTypeFilterList> = () => {
  return <BeerTypeFilterList />;
};

export const 나라_필터_목록: ComponentStory<typeof BeerCountryFilterList> = () => {
  return <BeerCountryFilterList />;
};

export const 나라_필터_탭: ComponentStory<typeof BeerCountryFilterTab> = () => {
  return <BeerCountryFilterTab />;
};
