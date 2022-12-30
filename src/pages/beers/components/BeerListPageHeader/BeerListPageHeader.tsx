import { isNil } from 'lodash';
import { useRouter } from 'next/router';

import Header from '@/components/Header';
import { ROUTE_PATH } from '@/constants/routes';

import BeerListViewToggleButton from '../BeerListViewToggleButton';

import SearchBox from './SearchBox';

const BeerListPageHeader = () => {
  const router = useRouter();
  const query = isNil(router.query.query) ? undefined : decodeURI(String(router.query.query));

  const handleSearchBoxClick = () => router.push(ROUTE_PATH.SEARCH.HOME);

  const handleClearClick = () => {
    router.replace(ROUTE_PATH.BEERS.HOME);
  };

  return (
    <Header rightExtras={<BeerListViewToggleButton />}>
      <SearchBox
        query={query}
        placeHolder="맥주 이름, 특징 검색"
        onClick={handleSearchBoxClick}
        onClearClick={handleClearClick}
      />
    </Header>
  );
};

export default BeerListPageHeader;
