import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { IBaseResponse, IBeer, IReview } from '@/types';

export interface IGetRecordsByBeer extends IBaseResponse<IReview[]> {}

/**
 * 맥주별 reviews 조회
 */

export const getReviewsByBeer = async (beerId: number) => {
  const res = await request<IGetRecordsByBeer>({
    method: 'get',
    url: '/api/v1/reviews',
    params: {
      beerId,
    },
  });

  return res.data;
};

// @todo: 페이지네이션 구현

export const useGetReviewsByBeer = (beerId: IBeer['id'], initialData?: IReview[]) => {
  const result = useQuery(['reviews', beerId], () => getReviewsByBeer(beerId), {
    cacheTime: Infinity,
    initialData,
    enabled: !!beerId,
  });

  return result;
};
