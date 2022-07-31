import request from '@/commons/axios';
import { IBeer } from '@/types';

/**
 *
 * @example
 *
 */
export const getBeer = async (auth: boolean, payload: IBeer) => {
  const res = await request<IBeer>({
    method: 'GET',
    url: auth ? '/api/v3/beers' : '/guest/api/v1/beers',
    data: payload,
  });

  return res;
};
