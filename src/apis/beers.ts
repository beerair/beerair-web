import axios from 'axios';

import { ICountry } from '@/apis/country';
import { IBaseResponse } from '@/apis/index';

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

export interface IGetBeerResponseData extends IBaseResponse<IBeer> {}

/**
 * 맥주 상세정보 조회
 */
export const getBeer = async (beerId: number) => {
  const res = await axios.get<IGetBeerResponseData>(
    `https://api.beerair.kr/api/v1/beers/${beerId}`,
  );
  return res.data.data;
};
