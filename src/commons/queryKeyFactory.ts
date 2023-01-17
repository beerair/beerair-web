/*
@example 
  [key]: (..ars) => [key, ...args]
*/

import { IGetBeersParams } from '@/apis/beers/getBeers';

export const queryKeyFactory = {
  FETCH_TEST: () => ['FETCH_TEST'],
  GET_BEERS: (payload?: Omit<IGetBeersParams, 'offset'>) => ['GET_BEERS', payload],
  GET_BEER_RECOMMENDS: () => ['GET_BEER_RECOMMENDS'],
  GET_BEER_LIKES: () => ['GET_BEER_LIKES'],
  GET_BEER_TYPES: () => ['GET_BEER_TYPES'],
  GET_CONTINENTS: () => ['GET_CONTINENTS'],
  GET_COUNTRIES: (continentId?: number) => ['GET_COUNTRIES', continentId],
};
