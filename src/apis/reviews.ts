import axios from 'axios';

import { IBasePaginationResponse, IBaseResponse, IBeer, ICountry, IFlavor } from '.';

export interface IReview {
  id: string;
  content: string;
  feelStatus: string;
  imageUrl: string;
  createdAt: string;
  member: any;
  beer: IBeer;
  departuresCountry: ICountry;
  arrivalCountry: ICountry;
  flavors: IFlavor[];
}

export interface IGetRecordsByBeer extends IBaseResponse<IReview[]> {}

/**
 * 맥주별 reviews 조회
 */

export const getReviewsByBeer = async (beerId: number) => {
  const res = await axios.get<IGetRecordsByBeer>(
    `https://api.beerair.kr/api/v1/reviews?beerId=${beerId}`,
  );
  return res.data.data;
};
