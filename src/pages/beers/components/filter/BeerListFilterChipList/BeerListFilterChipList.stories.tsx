import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerListFilterChipList from './BeerListFilterChipList';

export default {
  component: BeerListFilterChipList,
} as ComponentMeta<typeof BeerListFilterChipList>;

const Template: ComponentStory<typeof BeerListFilterChipList> = (args) => (
  <BeerListFilterChipList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  filterChips: [
    { id: 1, text: '아시아', filterKey: 'country' },
    { id: 1, text: '필스너', filterKey: 'type' },
    { id: 2, text: 'IPA', filterKey: 'type' },
  ],
  onRemove: (chip) => alert(`${chip.id}, ${chip.filterKey} 제거`),
};
