import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { IBaseResponse, IBeerType } from '@/types';

import { mockBeerTypes } from './mocks';

interface IGetBeerTypesResponseData extends IBaseResponse<IBeerType[]> {}

/**
 * 맥주 종류 조회
 */
export const getBeerTypes = async () => {
  // TODO: 서버 cors 에러 수정된 후 mock 걷어내기
  return mockBeerTypes;

  const res = await request<IGetBeerTypesResponseData>({
    method: 'get',
    url: '/api/v1/beer-types',
  });

  return res.data;
};

export const useGetBeerTypes = () => {
  return useQuery(['beerTypes'], getBeerTypes);
};
