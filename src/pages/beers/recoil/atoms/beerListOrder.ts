import { isNil } from 'lodash';
import qs from 'qs';
import { atom } from 'recoil';

import urlSyncRecoilEffect from '@/recoil/effects/url-sync';
import { BEER_LIST_ORDER, BeerListOrder } from '@/types';
import isServer from '@/utils/isServer';

const BEER_LIST_ORDER_ATOM_KEY = 'beer-list-order';

export const beerListOrderTextAlias: Record<BeerListOrder, string> = {
  [BEER_LIST_ORDER.NAME]: '맥주 이름 순',
  [BEER_LIST_ORDER.REVIEW]: '리뷰 많은 순',
  [BEER_LIST_ORDER.ALCOHOL_HIGHEST]: '높은 도수 순',
  [BEER_LIST_ORDER.ALCOHOL_LOWEST]: '낮은 도수 순',
};

const initDefaultOrder = (defaultValue: BeerListOrder): BeerListOrder => {
  if (isServer()) return defaultValue;

  const parsedQueryParams = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  return isNil(parsedQueryParams.order) ? defaultValue : (parsedQueryParams.order as BeerListOrder);
};

export const $beerListOrder = atom<BeerListOrder>({
  key: BEER_LIST_ORDER_ATOM_KEY,
  default: initDefaultOrder(BEER_LIST_ORDER.REVIEW),
  effects: [urlSyncRecoilEffect('order')],
});
