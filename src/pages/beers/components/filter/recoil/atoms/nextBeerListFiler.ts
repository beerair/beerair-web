import { atom } from 'recoil';

import { BeerListFilterChipType } from '../../BeerListFilterChipList';

import { IBeerListFilter } from '@/types-old/beer';

export const $nextBeerListFilter = atom<IBeerListFilter>({
  key: 'next-beer-list-filter',
  default: {},
});

export const $nextBeerListFilterChips = atom<BeerListFilterChipType[]>({
  key: 'next-beer-list-filter-chips',
  default: [],
});
