import { DefaultValue, selector } from 'recoil';

import { $nextBeerListFilter } from '../atoms';

const SELECTOR_KEY = 'selected-beer-type';

export const $selectedBeerTypeIds = selector<number[]>({
  key: SELECTOR_KEY,
  get: ({ get }) => get($nextBeerListFilter).type || [],
  set: ({ set, get }, newValue) =>
    set(
      $nextBeerListFilter,
      newValue instanceof DefaultValue ? newValue : { ...get($nextBeerListFilter), type: newValue },
    ),
});
