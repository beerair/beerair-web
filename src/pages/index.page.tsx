import type { GetServerSideProps, NextPage } from 'next';

import { queryKeyFactory } from '@/commons/queryKeyFactory';
import { prefetchWithSSR } from '@/commons/prefetch';
import { getTest, useGetTest } from '@/apis/test/getTest';

const Home: NextPage = () => {
  const { data } = useGetTest();

  return <div>{data}</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const resources = [{ key: queryKeyFactory.FETCH_TEST(), fetcher: getTest }];

  const { dehydratedState } = await prefetchWithSSR(resources);

  return {
    props: {
      dehydratedState,
    },
  };
};

export default Home;
