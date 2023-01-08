import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { IBaseResponse, ICountry } from '@/types';

interface IGetCountriesResponseData extends IBaseResponse<ICountry[]> {}

/**
 * 국가 조회
 */
export const getCountries = async (continentId?: number) => {
  const res = await request<IGetCountriesResponseData>({
    method: 'get',
    url: continentId ? `/api/v1/continents/${continentId}/countries` : '/api/v1/countries',
  });

  return res.data;
};

export const useGetCountries = (continentId?: number) => {
  return useQuery(['countries', continentId], () => getCountries(continentId));
};
