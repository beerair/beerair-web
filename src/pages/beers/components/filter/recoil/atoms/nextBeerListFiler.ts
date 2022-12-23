import { atom } from 'recoil';

import { IBeerListFilter } from '@/types-old/beer';

import { BeerListFilterChipType } from '../../BeerListFilterChipList';


export const $nextBeerListFilter = atom<IBeerListFilter>({
  key: 'next-beer-list-filter',
  default: {},
});

export const $nextBeerListFilterChips = atom<BeerListFilterChipType[]>({
  key: 'next-beer-list-filter-chips',
  default: [],
});
