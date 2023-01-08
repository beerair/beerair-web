import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { IBaseResponse, IBeer, IFlavor, IFlavorByBeer } from '@/types';

export type IGetFlavorsResponseData = IBaseResponse<IFlavor[]>;
export type IGetFlavorsByBeerResponseData = IBaseResponse<IFlavorByBeer[]>;

/**
 * 맥주 맛 목록 조회
 */

export const getFlavors = async () => {
  const res = await request<IGetFlavorsResponseData>({
    method: 'get',
    url: '/api/v1/flavors',
  });

  return res.data;
};

export const useGetFlavors = () => {
  const result = useQuery(['flavors'], () => getFlavors());

  return result;
};

/**
 * 특정 맥주의 맛 랭킹 조회
 */

export const getFlavorsByBeer = async (beerId: number, limit: number) => {
  const res = await request<IGetFlavorsByBeerResponseData>({
    method: 'get',
    url: '/api/v1/flavors/rank',
    params: {
      beerId,
      limit,
    },
  });

  return res.data;
};

export const useGetFlavorsByBeer = (
  beerId: IBeer['id'],
  limit: number,
  initialData?: IFlavorByBeer[],
) => {
  const result = useQuery(['flavors', beerId], () => getFlavorsByBeer(beerId, limit), {
    cacheTime: Infinity,
    initialData,
    enabled: !!beerId,
  });

  return result;
};
