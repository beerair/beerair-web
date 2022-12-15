import { ICountry } from '@/types/country';

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
  myReview: any;
  korName: string;
  engName: string;
  imageUrl: string;
  content: string;
  alcohol: number;
  price: number;
  volume: number;
  liked: boolean;
}
