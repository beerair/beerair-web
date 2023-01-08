import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { IBaseResponse, IContinent } from '@/types';

interface IGetContinentsResponseData extends IBaseResponse<IContinent[]> {}

/**
 * 대륙 조회
 */
export const getContinents = async () => {
  const res = await request<IGetContinentsResponseData>({
    method: 'get',
    url: '/api/v1/continents',
  });

  return res.data;
};

export const useGetContinents = () => {
  return useQuery(['continents'], getContinents);
};
