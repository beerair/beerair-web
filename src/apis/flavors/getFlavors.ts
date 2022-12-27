import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { IBaseResponse, IBeer, IFlavor } from '@/types';

export type IGetFlavorsResponseData = IBaseResponse<IFlavor[]>;

export const getFlavors = async (beerId: number, limit: number) => {
  const res = await request<IGetFlavorsResponseData>({
    method: 'get',
    url: '/api/v1/flavors/rank',
    params: {
      beerId,
      limit,
    },
  });

  return res.data;
};

export const useGetFlavors = (beerId: IBeer['id'], limit: number, initialData?: IFlavor[]) => {
  const result = useQuery(['flavors', beerId], () => getFlavors(beerId, limit), {
    cacheTime: Infinity,
    initialData,
    enabled: !!beerId,
  });

  return result;
};
