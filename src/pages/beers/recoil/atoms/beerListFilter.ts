import { isNil } from 'lodash';
import qs from 'qs';
import { atom } from 'recoil';

import urlSyncRecoilEffect from '@/recoil/effects/url-sync';
import { BeerListFilter } from '@/types';
import isServer from '@/utils/isServer';

const BEER_LIST_FILTER_ATOM_KEY = 'beer-list-filter';

export const DEFAULT_BEER_LIST_FILTER: BeerListFilter = {};

const initDefaultFilter = (defaultValue: BeerListFilter): BeerListFilter => {
  if (isServer()) {
    return defaultValue;
  }

  const parsedQueryParams = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  return isNil(parsedQueryParams.filter)
    ? defaultValue
    : (JSON.parse(parsedQueryParams.filter as string) as BeerListFilter);
};

export const $beerListFilter = atom<BeerListFilter>({
  key: BEER_LIST_FILTER_ATOM_KEY,
  default: initDefaultFilter(DEFAULT_BEER_LIST_FILTER),
  effects: [urlSyncRecoilEffect('filter', { stringify: true })],
});
