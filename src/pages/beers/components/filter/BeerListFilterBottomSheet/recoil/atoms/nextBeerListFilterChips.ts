import { atom } from 'recoil';

import { BeerListFilterChip } from '@/types';

export const $nextBeerListFilterChips = atom<BeerListFilterChip[]>({
  key: 'next-beer-list-filter-chips',
  default: [],
});
