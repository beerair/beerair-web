import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { BeerListFilter, BeerListOrder, IBasePaginationResponse, IBeer } from '@/types';

interface IGetBeerResponseData extends IBasePaginationResponse<IBeer[]> {}

interface IGetBeersParams {
  country?: BeerListFilter['country'];
  type?: BeerListFilter['type'];
  order?: BeerListOrder;
  keyword?: string;
  offset?: number;
}

/**
 * 맥주 목록 조회
 */
export const getBeers = async (params?: IGetBeersParams) => {
  const res = await request<IGetBeerResponseData>({
    method: 'get',
    url: `/api/v1/beers`,
    params,
  });

  return res.data;
};

// TODO: api 확정 후 무한스크롤 적용
export const useGetBeers = (payload?: Omit<IGetBeersParams, 'offset'>) => {
  const params: IGetBeersParams = {
    ...payload,
    // offset: 0,
  };

  return useQuery(['beers', params], () => getBeers(params));
};
