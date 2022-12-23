import type { GetServerSideProps, NextPage } from 'next';

import { getTest, useGetTest } from '@/apis/test/getTest';
import { prefetchWithSSR } from '@/commons/prefetch';
import { queryKeyFactory } from '@/commons/queryKeyFactory';

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
