import { DefaultValue, selector } from 'recoil';

import { $nextBeerListFilter } from '../atoms';

import { BeerType } from '@/types-old';

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
