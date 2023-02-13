import {
  dehydrate,
  FetchInfiniteQueryOptions,
  FetchQueryOptions,
  QueryClient,
  QueryFunction,
  QueryKey,
  DehydratedState,
} from 'react-query';

type ResourcesType<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = {
  key: TQueryKey;
  fetcher: QueryFunction<TQueryFnData, TQueryKey>;
} & (
  | {
      options?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
      useInfiniteQuery?: false;
    }
  | {
      options?: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>;
      useInfiniteQuery: true;
    }
);

export async function prefetchWithSSR(resources: ResourcesType[]) {
  const queryClient = new QueryClient();

  await Promise.all(
    resources.map(({ key, fetcher, options, useInfiniteQuery }) => {
      return useInfiniteQuery
        ? queryClient.prefetchInfiniteQuery(key, fetcher, options)
        : queryClient.prefetchQuery(key, fetcher, options);
    }),
  );

  return {
    // issue reference : https://github.com/TanStack/query/issues/1458
    dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))) as DehydratedState,
  };
}
