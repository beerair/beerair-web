import { dehydrate, QueryClient } from 'react-query';

export interface ResourcesType {
  key: Array<any>;
  fetcher: (...args: any) => void;
}

export async function prefetchWithSSR(resources: ResourcesType[]) {
  const queryClient = new QueryClient();

  await Promise.all(resources.map(({ key, fetcher }) => queryClient.prefetchQuery(key, fetcher)));

  return {
    dehydratedState: dehydrate(queryClient),
  };
}
