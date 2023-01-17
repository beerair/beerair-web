import styled from '@emotion/styled';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilValue } from 'recoil';

import Icon from '@/components/Icon';
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
    <>
      <StyledBeerList type={beerListViewType}>
        {beers?.map((beer) => (
          <BeerItem key={beer.id} type={beerListViewType} beer={beer} />
        ))}
      </StyledBeerList>
      {hasNextPage && (
        <StyledLoadingIcon ref={ref}>
          <Icon name="AirPlaneLoading" size={32} />
        </StyledLoadingIcon>
      )}
    </>
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

const StyledLoadingIcon = styled.div`
  width: 100%;
  margin: 30px 0 50px;

  & > svg {
    margin: 0 auto;

    @keyframes slideDown {
      0% {
        transform: translateY(-80%) scale(0.9);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      80% {
        transform: translateY(20%) scale(1);
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }

    animation: 2s slideDown infinite;
  }
`;
