import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { queryKeyFactory } from '@/commons/queryKeyFactory';
import { IBaseResponse, IBeer } from '@/types';

interface IGetBeerRecommendsResponseData extends IBaseResponse<IBeer[]> {}

/**
 * 맥주 추천 목록 조회
 */
export const getBeerRecommends = async () => {
  const res = await request<IGetBeerRecommendsResponseData>({
    method: 'get',
    url: '/api/v1/beers/recommends',
  });

  return res.data;
};

export const useGetBeerRecommends = () => {
  return useQuery(queryKeyFactory.GET_BEER_RECOMMENDS(), getBeerRecommends);
};
