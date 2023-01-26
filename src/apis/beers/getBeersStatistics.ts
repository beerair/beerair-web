import { useQuery } from 'react-query';

import request from '@/commons/axios';
import { queryKeyFactory } from '@/commons/queryKeyFactory';
import { IBaseResponse } from '@/types';

interface IGetBeersStatisticsResponseData
  extends IBaseResponse<{
    isActiveBeerCount: number;
    isDeletedBeerCount: number;
    totalBeerCount: number;
  }> {}

/**
 * 맥주 통계 정보 조회
 */
export const getBeersStatistics = async () => {
  const res = await request<IGetBeersStatisticsResponseData>({
    method: 'get',
    url: '/api/v1/beers/statistics',
  });

  return res.data;
};

export const useGetBeersStatistics = () => {
  return useQuery(queryKeyFactory.GET_BEERS_STATISTIC(), getBeersStatistics);
};
