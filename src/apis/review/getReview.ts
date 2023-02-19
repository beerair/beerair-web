import request from '@/commons/axios';
import { IBaseResponse, IReview } from '@/types';

export interface IGetReview extends IBaseResponse<IReview> {}

/**
 * 나의 리뷰 조회
 */

export const getReview = async (id?: number) => {
  const res = await request<IGetReview>({
    method: 'get',
    url: '/api/v1/reviews',
    params: { id },
  });

  return res.data;
};
