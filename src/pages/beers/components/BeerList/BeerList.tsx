import styled from '@emotion/styled';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilValue } from 'recoil';

import { $beerListViewType, BeerListViewType } from '@/recoil/atoms';
import { IBeer } from '@/types';

import BeerItem from '../BeerItem';

interface Props {
  beers?: IBeer[];
  isLoading?: boolean;
  emptyComponent?: React.ReactNode;
  loadingComponent?: React.ReactNode;
  hasNextPage?: boolean;
  fetchNextPage?: () => void;
}

const BeerList = ({
  beers,
  isLoading,
  emptyComponent = null,
  loadingComponent = null,
  hasNextPage,
  fetchNextPage,
}: Props) => {
  const beerListViewType = useRecoilValue($beerListViewType);

  const { ref } = useInView({
    skip: !hasNextPage,
    onChange: (inView) => {
      if (inView && hasNextPage && !isLoading && fetchNextPage) {
        fetchNextPage();
      }
    },
  });

  if (isLoading || !beers) {
    return <>{loadingComponent}</>;
  }

  if (!isLoading && beers.length === 0) {
    return <>{emptyComponent}</>;
  }

  return (
    <StyledBeerList type={beerListViewType}>
      {beers?.map((beer) => (
        <BeerItem key={beer.id} type={beerListViewType} beer={beer} />
      ))}
      {hasNextPage && <div ref={ref} />}
    </StyledBeerList>
  );
};

export default BeerList;

const StyledBeerList = styled.div<{ type: BeerListViewType }>`
  width: 100%;
  box-sizing: border-box;
  display: grid;

  ${(p) =>
    p.type === 'grid'
      ? `
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 26px 15px;
    padding: 20px;
    `
      : `
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 16px;
    padding: 20px 20px 14px;
      `}
`;
