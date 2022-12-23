import axios from 'axios';
import { useQuery } from 'react-query';

import { IBaseResponse, IBeer } from '@/types';
import request from '@/commons/axios';

interface IGetBeerResponseData extends IBaseResponse<IBeer> {}

/**
 * 맥주 상세정보 조회
 */
export const getBeer = async (beerId: number) => {
  const res = await request<IGetBeerResponseData>({
    method: 'get',
    url: `/api/v1/beers/${beerId}`,
  });

  return res.data;
};

export const useGetBeer = (beerId: IBeer['id'], initialData?: IBeer) => {
  const result = useQuery(['beer', beerId], () => getBeer(beerId), {
    cacheTime: Infinity,
    initialData,
    enabled: !!beerId,
  });

  return result;
};
