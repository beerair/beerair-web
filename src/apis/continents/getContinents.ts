import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { IBaseResponse, IContinent } from '@/types';

import { mockContinents } from './mocks';

interface IGetContinentsResponseData extends IBaseResponse<IContinent[]> {}

/**
 * 대륙 조회
 */
export const getContinents = async () => {
  // TODO: 서버 cors 에러 수정된 후 mock 걷어내기
  return mockContinents;

  const res = await request<IGetContinentsResponseData>({
    method: 'get',
    url: '/api/v1/continents',
  });

  return res.data;
};

export const useGetContinents = () => {
  return useQuery(['continents'], getContinents);
};
