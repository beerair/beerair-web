import { atom } from 'recoil';

import { BeerListFilterChip } from '@/types';

export const BEER_LIST_FILTER_CHIPS_ATOM_KEY = 'beer-list-filter-chip';

export const $beerListFilterChips = atom<BeerListFilterChip[]>({
  key: BEER_LIST_FILTER_CHIPS_ATOM_KEY,
  default: [],
});
