import { useMutation, useQueryClient } from 'react-query';

import request from '@/commons/axios';
import { queryKeyFactory } from '@/commons/queryKeyFactory';
import { IBaseResponse, IReview } from '@/types';

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

export const createReview = async (payload: ICreateReviewPayload) => {
  const res = await request<ICreateReviewResponseData>({
    method: 'post',
    url: '/api/v1/reviews',
    data: { payload },
  });

  return res.data;
};

export const useCreateReviewMutation = () => {
  const cache = useQueryClient();

  const { mutateAsync: createReviewMutation, ...rest } = useMutation(createReview, {
    onSuccess: async () => {
      await cache.invalidateQueries(queryKeyFactory.CREATE_REVIEW());
    },
  });

  return {
    createReview: createReviewMutation,
    ...rest,
  };
};
