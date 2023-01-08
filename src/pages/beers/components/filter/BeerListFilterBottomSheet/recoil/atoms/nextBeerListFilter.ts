import { atom } from 'recoil';

import { BeerListFilter } from '@/types';

export const $nextBeerListFilter = atom<BeerListFilter>({
  key: 'next-beer-list-filter',
  default: {},
});
