import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { IBaseResponse, IBeerType } from '@/types';

interface IGetBeerTypesResponseData extends IBaseResponse<IBeerType[]> {}

/**
 * 맥주 종류 조회
 */
export const getBeerTypes = async () => {
  const res = await request<IGetBeerTypesResponseData>({
    method: 'get',
    url: '/api/v1/beer-types',
  });

  return res.data;
};

export const useGetBeerTypes = () => {
  return useQuery(['beerTypes'], getBeerTypes);
};
