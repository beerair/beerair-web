import styled from '@emotion/styled';
import { isNil } from 'lodash';
import { useRouter } from 'next/router';

import BottomNavigation from '@/components/BottomNavigation';
import { BOTTOM_NAVIGATION_HEIGHT } from '@/components/BottomNavigation';
import Header from '@/components/Header';
import { beer } from '@/constants/dummy';
import { ROUTE_PATH } from '@/constants/routes';
import { useElementSize } from '@/hooks';
import { IBeer } from '@/types';

import BeerList from './components/BeerList';
import BeerListViewToggleButton from './components/BeerListViewToggleButton';
import BeerSearchResultEmpty from './components/BeerSearchResultEmpty';
import BeerListFilterAndSorter from './components/filter/BeerListFilterAndSorter';
import SearchBox from './components/SearchBox';

const BeerListPage = () => {
  const router = useRouter();
  const query = isNil(router.query.query) ? undefined : decodeURI(String(router.query.query));

  const beers: IBeer[] = Array(10)
    .fill(0)
    .map((_, index) => ({ ...beer, id: index + 1 }));

  const {
    ref,
    size: { height: topFloatingLayoutHeight },
  } = useElementSize<HTMLDivElement>();

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
        <BeerListFilterAndSorter />
      </StyledTopFloatingLayout>
      {!beers?.length ? <BeerSearchResultEmpty query={query} /> : <BeerList beers={beers} />}
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
