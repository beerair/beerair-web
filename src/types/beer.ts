import { ICountry } from '.';

export const BEER_TYPE = {
  LIGHT_ALE: 'LIGHT_ALE',
  IPA: 'IPA',
  PALE_ALE: 'PALE_ALE',
  BROWN_ALE: 'BROWN_ALE',
  LARGER: 'LARGER',
  WEIZEN: 'WEIZEN',
  PILSNER: 'PILSNER',
} as const;

export type BeerType = typeof BEER_TYPE[keyof typeof BEER_TYPE];

export interface IBeerType {
  nameEng: BeerType;
  nameKor: string;
  description: string;
  imageUrl: string;
}

export interface IBeer {
  id: number;
  country?: ICountry;
  type?: IBeerType;
  nameKor: string;
  nameEng: string;
  startCountry: Pick<ICountry, 'nameKor' | 'nameEng'>;
  endCountry: Pick<ICountry, 'nameKor' | 'nameEng'>;
  imageUrl: string;
  content: string;
  alcohol: number;
  price: number;
  volume: number;
  deletedAt?: Date | number;
  createdAt: Date | number;
  updatedAt: Date | number;
  feel?: number | null;
  isLiked: boolean;
}

export interface IBeerListFilter {
  beerTypes?: BeerType[];
  countryIds?: number[];
}
