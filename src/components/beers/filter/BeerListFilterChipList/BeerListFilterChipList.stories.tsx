import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerListFilterChipList from './BeerListFilterChipList';

import { BEER_TYPES } from '@/types/beer';

export default {
  component: BeerListFilterChipList,
} as ComponentMeta<typeof BeerListFilterChipList>;

const Template: ComponentStory<typeof BeerListFilterChipList> = (args) => (
  <BeerListFilterChipList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  filterChips: [
    { id: 1, text: '아시아', type: 'country' },
    { id: BEER_TYPES.PILSNER, text: '필스너', type: 'beerType' },
    { id: BEER_TYPES.IPA, text: 'IPA', type: 'beerType' },
  ],
  onRemove: (chip) => alert(`${chip.id}, ${chip.type} 제거`),
};
