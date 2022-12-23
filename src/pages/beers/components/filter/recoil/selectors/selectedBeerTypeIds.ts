import { DefaultValue, selector } from 'recoil';

import { BeerType } from '@/types-old';

import { $nextBeerListFilter } from '../atoms';


const SELECTOR_KEY = 'selected-beer-type-ids';

export const $selectedBeerTypeIds = selector<BeerType[]>({
  key: SELECTOR_KEY,
  get: ({ get }) => get($nextBeerListFilter).beerTypes || [],
  set: ({ set, get }, newValue) =>
    set(
      $nextBeerListFilter,
      newValue instanceof DefaultValue
        ? newValue
        : { ...get($nextBeerListFilter), beerTypes: newValue },
    ),
});
