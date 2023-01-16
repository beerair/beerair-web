import styled from '@emotion/styled';
import { isNil } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { useGetBeers } from '@/apis/beers/getBeers';
import BottomNavigation from '@/components/BottomNavigation';
import { BOTTOM_NAVIGATION_HEIGHT } from '@/components/BottomNavigation';
import Header from '@/components/Header';
import { ROUTE_PATH } from '@/constants/routes';
import { useElementSize } from '@/hooks';

import BeerList from './components/BeerList';
import BeerListViewToggleButton from './components/BeerListViewToggleButton';
import BeerSearchResultEmpty from './components/BeerSearchResultEmpty';
import BeerListFilterAndSorter from './components/filter/BeerListFilterAndSorter';
import SearchBox from './components/SearchBox';
import { $beerListFilter, $beerListOrder } from './recoil/atoms';

const BeerListPage = () => {
  const router = useRouter();
  const query = isNil(router.query.query) ? undefined : decodeURI(String(router.query.query));
  const filter = useRecoilValue($beerListFilter);
  const order = useRecoilValue($beerListOrder);

  const { data: beersData, isLoading } = useGetBeers({
    keyword: query,
    order,
    ...filter,
  });
  const beers = beersData;

  const {
    ref,
    size: { height: topFloatingLayoutHeight },
  } = useElementSize<HTMLDivElement>();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [filter, order, query]);

  const handleSearchBoxClick = () => router.push(ROUTE_PATH.SEARCH.MAIN);

  const handleClearClick = () => {
    router.replace(ROUTE_PATH.BEERS.LIST);
  };

  return (
    <StyledBeerListPage paddingTop={topFloatingLayoutHeight}>
      <StyledTopFloatingLayout ref={ref}>
        <Header rightExtras={<BeerListViewToggleButton />}>
          <SearchBox
            query={query}
            placeHolder="맥주 이름, 특징 검색"
            onClick={handleSearchBoxClick}
            onClearClick={handleClearClick}
          />
        </Header>
        {/* TODO: resultCount, totalCount 전달 */}
        <BeerListFilterAndSorter />
      </StyledTopFloatingLayout>
      <BeerList
        beers={beers}
        isLoading={isLoading}
        emptyComponent={<BeerSearchResultEmpty query={query} />}
      />
      <BottomNavigation />
    </StyledBeerListPage>
  );
};

export default BeerListPage;

const StyledBeerListPage = styled.div<{ paddingTop: number }>`
  padding: ${(p) => p.paddingTop}px 0 ${BOTTOM_NAVIGATION_HEIGHT}px;
`;

const StyledTopFloatingLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  max-width: 768px;
  margin: 0 auto;
`;
