import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { IBaseResponse, ICountry } from '@/types';

import { mockCountriesByContinentId, mockCountriesAll } from './mocks';

interface IGetCountriesResponseData extends IBaseResponse<ICountry[]> {}

/**
 * 국가 조회
 */
export const getCountries = async (continentId?: number) => {
  // TODO: 서버 cors 에러 수정된 후 mock 걷어내기
  if (continentId) {
    return mockCountriesByContinentId;
  }

  return mockCountriesAll;

  const res = await request<IGetCountriesResponseData>({
    method: 'get',
    url: continentId ? `/api/v1/continents/${continentId}/countries` : '/api/v1/countries',
  });

  return res.data;
};

export const useGetCountries = (continentId?: number) => {
  return useQuery(['countries', continentId], () => getCountries(continentId));
};
