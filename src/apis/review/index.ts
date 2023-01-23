import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { IBaseResponse, IBeer, IImage, IReview } from '@/types';

export interface IGetReview extends IBaseResponse<IReview> {}
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
  const result = useQuery(['reviews', beerId], () => getReviewsByBeer(beerId), {
    cacheTime: Infinity,
    initialData,
    enabled: !!beerId,
  });

  return result;
};

/**
 * 리뷰 등록
 */

export interface ICreateReviewResponseData extends IBaseResponse<IReview> {}

export interface ICreateReviewPayload {
  beerId: number;
  content: string;
  feelStatus: number;
  imageUrl: string;
  isPublic: boolean;
  flavorIds: number[];
}

export const postReview = async (payload: ICreateReviewPayload) => {
  const res = await request<ICreateReviewResponseData>({
    method: 'post',
    url: '/api/v1/reviews',
    data: { payload },
  });

  return res.data;
};

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
