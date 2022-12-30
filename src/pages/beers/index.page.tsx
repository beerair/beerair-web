import styled from '@emotion/styled';

import BottomNavigation from '@/components/BottomNavigation';
import { BOTTOM_NAVIGATION_HEIGHT } from '@/components/BottomNavigation';
import { HEADER_HEIGHT } from '@/components/Header';
import { beer } from '@/constants/dummy';

import BeerList from './components/BeerList';
import BeerListPageHeader from './components/BeerListPageHeader';

const BeerListPage = () => {
  return (
    <StyledBeerListPage>
      <BeerListPageHeader />
      <BeerList
        beers={Array(10)
          .fill(0)
          .map((_, index) => ({ ...beer, id: index + 1 }))}
      />
      <BottomNavigation />
    </StyledBeerListPage>
  );
};

export default BeerListPage;

const StyledBeerListPage = styled.div`
  padding: ${HEADER_HEIGHT}px 0 ${BOTTOM_NAVIGATION_HEIGHT}px;
`;
