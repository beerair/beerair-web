import { DefaultValue, selector } from 'recoil';

import { $nextBeerListFilter } from '../atoms';

const SELECTOR_KEY = 'selected-country';

export const $selectedBeerCountryIds = selector<number[]>({
  key: SELECTOR_KEY,
  get: ({ get }) => get($nextBeerListFilter).country || [],
  set: ({ set, get }, newValue) =>
    set(
      $nextBeerListFilter,
      newValue instanceof DefaultValue
        ? newValue
        : { ...get($nextBeerListFilter), country: newValue },
    ),
});
