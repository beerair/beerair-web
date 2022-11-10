import axios from 'axios';

import { IBaseResponse } from '.';

export interface IFlavor {
  id: number;
  content: string;
  count: number;
}

export type IGetFlavorsResponseData = IBaseResponse<IFlavor[]>;

export const getFlavors = async (beerId: number, limit: number) => {
  const res = await axios.get<IGetFlavorsResponseData>(
    `https://api.beerair.kr/api/v1/flavors/rank?beerId=${beerId}&limit=${limit}`,
  );
  return res.data.data;
};
