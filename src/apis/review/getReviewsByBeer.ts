import axios from 'axios';
import { useQuery } from 'react-query';

import { IBaseResponse, IBeer, IReview } from '@/types';

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

// @todo: 페이지네이션 구현

export const useGetReviewsByBeer = (beerId: IBeer['id'], initialData?: IReview[]) => {
  const result = useQuery(['reviews', beerId], () => getReviewsByBeer(beerId), {
    cacheTime: Infinity,
    initialData,
  });

  return result;
};
