import { useQuery, UseQueryOptions } from 'react-query';

import { queryKeyFactory } from '@/commons/queryKeyFactory';

export const getTest = () => {
  return 'hello, beerair';
};

export const useGetTest = (
  options?:
    | Omit<UseQueryOptions<string, unknown, string, string[]>, 'queryKey' | 'queryFn'>
    | undefined,
) => {
  const { data, ...rest } = useQuery(queryKeyFactory.FETCH_TEST(), getTest, {
    ...options,
  });

  return {
    data: data!,
    ...rest,
  };
};
