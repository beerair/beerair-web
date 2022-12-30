import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { useRecoilValue } from 'recoil';

import { $beerListViewType, BeerListViewType } from '@/recoil/atoms';
import { IBeer } from '@/types';

import BeerItem from '../BeerItem';

interface Props {
  beers: IBeer[];
  hasNextPage?: boolean;
  isLoading?: boolean;
  fetchNextPage?: () => void;
}

const BeerList = ({ beers, hasNextPage, isLoading, fetchNextPage }: Props) => {
  const beerListViewType = useRecoilValue($beerListViewType);

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView && hasNextPage && !isLoading && fetchNextPage) {
        fetchNextPage();
      }
    },
  });

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
