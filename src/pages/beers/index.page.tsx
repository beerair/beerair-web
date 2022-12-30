import styled from '@emotion/styled';
import { isNil } from 'lodash';
import { useRouter } from 'next/router';

import BottomNavigation from '@/components/BottomNavigation';
import { BOTTOM_NAVIGATION_HEIGHT } from '@/components/BottomNavigation';
import { HEADER_HEIGHT } from '@/components/Header';
import Header from '@/components/Header';
import { beer } from '@/constants/dummy';
import { ROUTE_PATH } from '@/constants/routes';
import { IBeer } from '@/types';

import BeerList from './components/BeerList';
import BeerListViewToggleButton from './components/BeerListViewToggleButton';
import BeerSearchResultEmpty from './components/BeerSearchResultEmpty';
import SearchBox from './components/SearchBox';

const BeerListPage = () => {
  const router = useRouter();
  const query = isNil(router.query.query) ? undefined : decodeURI(String(router.query.query));

  const beers: IBeer[] = Array(10)
    .fill(0)
    .map((_, index) => ({ ...beer, id: index + 1 }));

  const handleSearchBoxClick = () => router.push(ROUTE_PATH.SEARCH.MAIN);

  const handleClearClick = () => {
    router.replace(ROUTE_PATH.BEERS.LIST);
  };

  return (
    <StyledBeerListPage>
      <Header rightExtras={<BeerListViewToggleButton />}>
        <SearchBox
          query={query}
          placeHolder="맥주 이름, 특징 검색"
          onClick={handleSearchBoxClick}
          onClearClick={handleClearClick}
        />
      </Header>
      {!beers?.length ? <BeerSearchResultEmpty query={query} /> : <BeerList beers={beers} />}
      <BottomNavigation />
    </StyledBeerListPage>
  );
};

export default BeerListPage;

const StyledBeerListPage = styled.div`
  padding: ${HEADER_HEIGHT}px 0 ${BOTTOM_NAVIGATION_HEIGHT}px;
`;
