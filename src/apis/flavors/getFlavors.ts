import axios from 'axios';
import { useQuery } from 'react-query';

import { IBaseResponse, IBeer, IFlavor } from '@/types';

export type IGetFlavorsResponseData = IBaseResponse<IFlavor[]>;

export const getFlavors = async (beerId: number, limit: number) => {
  const res = await axios.get<IGetFlavorsResponseData>(
    `https://api.beerair.kr/api/v1/flavors/rank?beerId=${beerId}&limit=${limit}`,
  );
  return res.data.data;
};

export const useGetFlavors = (beerId: IBeer['id'], limit: number, initialData?: IFlavor[]) => {
  const result = useQuery(['flavors', beerId], () => getFlavors(beerId, limit), {
    cacheTime: Infinity,
    initialData,
  });

  return result;
};
