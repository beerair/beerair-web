import { atom } from 'recoil';

import { BEER_LIST_ORDER, BeerListOrder } from '@/types';

export const BEER_LIST_ORDER_ATOM_KEY = 'beer-list-order';

export const beerListOrderTextAlias: Record<BeerListOrder, string> = {
  [BEER_LIST_ORDER.NAME]: '맥주 이름 순',
  [BEER_LIST_ORDER.REVIEW]: '리뷰 많은 순',
  [BEER_LIST_ORDER.ALCOHOL_HIGHEST]: '높은 도수 순',
  [BEER_LIST_ORDER.ALCOHOL_LOWEST]: '낮은 도수 순',
};

export const DEFAULT_BEER_LIST_ORDER = BEER_LIST_ORDER.REVIEW;

export const $beerListOrder = atom<BeerListOrder>({
  key: BEER_LIST_ORDER_ATOM_KEY,
  default: DEFAULT_BEER_LIST_ORDER,
});
