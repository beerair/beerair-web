import { atom } from 'recoil';

import { BeerListFilter } from '@/types';

export const BEER_LIST_FILTER_ATOM_KEY = 'beer-list-filter';

export const $beerListFilter = atom<BeerListFilter>({
  key: BEER_LIST_FILTER_ATOM_KEY,
  default: {},
});
