import { IGetReview } from '@/apis/review/getReview';
import request from '@/commons/axios';

/**
 * 나의 리뷰 삭제
 */

export const deleteReview = async (id?: number) => {
  const res = await request<IGetReview>({
    method: 'delete',
    url: '/api/v1/reviews',
    params: { id },
  });

  return res.data;
};
