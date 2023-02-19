import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { queryKeyFactory } from '@/commons/queryKeyFactory';
import { IBaseResponse, IBeer, IReview } from '@/types';

export interface IGetReviews extends IBaseResponse<IReview[]> {}

/**
 * 맥주별 reviews 조회
 */

export const getReviewsByBeer = async (beerId: number) => {
  const res = await request<IGetReviews>({
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
  const result = useQuery(queryKeyFactory.GET_REVIEWS(beerId), () => getReviewsByBeer(beerId), {
    cacheTime: Infinity,
    initialData,
    enabled: !!beerId,
  });

  return result;
};

/**
 * 나의 리뷰 목록 조회
 */

export const getMyReviews = async (limit?: number) => {
  const res = await request<IGetReviews>({
    method: 'get',
    url: '/api/v1/reviews/me',
    data: { limit },
  });

  return res.data;
};
