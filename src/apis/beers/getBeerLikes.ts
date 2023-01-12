import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { queryKeyFactory } from '@/commons/queryKeyFactory';
import { IBaseResponse, IBeer } from '@/types';

interface IGetBeerLikesResponseData extends IBaseResponse<IBeer[]> {}

/**
 * 맥주 찜(좋아요) 목록 조회
 */
export const getBeerLikes = async () => {
  const res = await request<IGetBeerLikesResponseData>({
    method: 'get',
    url: '/api/v1/beer-likes',
  });

  return res.data;
};

export const useGetBeerLikes = () => {
  return useQuery(queryKeyFactory.GET_BEER_LIKES(), getBeerLikes);
};
