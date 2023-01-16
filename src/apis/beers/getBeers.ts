import { useInfiniteQuery } from 'react-query';

import request from '@/commons/axios';
import { BeerListFilter, BeerListOrder, IBasePaginationResponse, IBeer } from '@/types';

interface IGetBeerResponseData extends IBasePaginationResponse<IBeer[]> {}

interface IGetBeersParams {
  country?: BeerListFilter['country'];
  type?: BeerListFilter['type'];
  order?: BeerListOrder;
  keyword?: string;
  offset?: number;
}

/**
 * 맥주 목록 조회
 */
export const getBeers = async (params?: IGetBeersParams) => {
  const res = await request<IGetBeerResponseData>({
    method: 'get',
    url: `/api/v1/beers`,
    params,
  });

  return res;
};

export const useGetBeers = (payload?: Omit<IGetBeersParams, 'offset'>) => {
  const result = useInfiniteQuery(
    ['beers', payload],
    ({ pageParam }) =>
      getBeers({
        ...payload,
        offset: pageParam ?? 0,
      }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.lastPage) {
          return;
        }

        return ((lastPage.page + 1) * lastPage.size) as IGetBeersParams['offset'];
      },
    },
  );

  const data = result.data
    ? {
        data: result.data.pages
          .map((page) => page.data)
          .reduce(
            (mergedContents, currentContents) => [...mergedContents, ...(currentContents || [])],
            [],
          ),
        resultCount: result.data.pages[0].totalElements,
      }
    : undefined;

  return {
    ...result,
    data,
  };
};
