import { ICountry } from './country';
import { IReview } from './reviews';

export interface IBeerType {
  id: number;
  korName: string;
  engName: string;
  content: string;
  imageUrl: string;
}

export interface IBeer {
  id: number;
  country?: ICountry;
  type?: IBeerType;
  myReview?: IReview;
  korName: string;
  engName: string;
  imageUrl: string;
  content: string;
  alcohol: number;
  price: number;
  volume: number;
  liked: boolean;
}

export type BeerListFilter = {
  country?: number[];
  type?: number[];
};

export type BeerListFilterChip = {
  filterKey: keyof BeerListFilter;
  id: number;
  text: string;
};

export const BEER_LIST_ORDER = {
  ALCOHOL_HIGHEST: 'ALCOHOL_HIGHEST',
  ALCOHOL_LOWEST: 'ALCOHOL_LOWEST',
  NAME: 'NAME',
  REVIEW: 'REVIEW',
} as const;

export type BeerListOrder = typeof BEER_LIST_ORDER[keyof typeof BEER_LIST_ORDER];
