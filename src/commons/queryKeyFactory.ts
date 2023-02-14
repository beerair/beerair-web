/*
@example 
  [key]: (..ars) => [key, ...args]
*/

import { IGetBeersParams } from '@/apis/beers/getBeers';
import { IBeer } from '@/types';

export const queryKeyFactory = {
  FETCH_TEST: () => ['FETCH_TEST'],
  GET_BEER: (beerId: IBeer['id']) => ['GET_BEER', beerId],
  GET_BEERS: (payload?: Omit<IGetBeersParams, 'offset'>) => ['GET_BEERS', payload],
  GET_BEERS_STATISTIC: () => ['GET_BEERS_STATISTIC'],
  GET_BEER_RECOMMENDS: () => ['GET_BEER_RECOMMENDS'],
  GET_BEER_LIKES: () => ['GET_BEER_LIKES'],
  GET_BEER_TYPES: () => ['GET_BEER_TYPES'],
  GET_CONTINENTS: () => ['GET_CONTINENTS'],
  GET_COUNTRIES: (continentId?: number) => ['GET_COUNTRIES', continentId],
  GET_REVIEWS: (beerId: IBeer['id']) => ['GET_REVIEWS', beerId],
  CREATE_REVIEW: () => ['CREATE_REVIEW'],
  GET_REVIEW: () => ['GET_REVIEW'],
  UPLOAD_IMAGE: () => ['UPLOAD_IMAGE'],
};
