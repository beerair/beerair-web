import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import LoadingIcon from '@/components/LoadingIcon';
import { requestBeer } from '@/constants/dummy';
import { REQUEST_BEER_STATUS } from '@/types-old';

import RequestedBeerItem from './components/RequestedBeerItem';

const BeerRequestListPage = () => {
  const hasNextPage = true;
  const resultCount = 4;
  return (
    <>
      <Header isTopFixed leftExtras={<BackButton />}>
        요청한 맥주 현황
      </Header>
      <StyledTotalNumber>총 {resultCount}건</StyledTotalNumber>
      {[
        requestBeer,
        { ...requestBeer, status: REQUEST_BEER_STATUS.PENDING },
        {
          ...requestBeer,
          status: REQUEST_BEER_STATUS.REJECTED,
          requestCompletedAt: '2022-06-21T02:55:12.151Z',
        },
        requestBeer,
      ]?.map((requestBeer) => (
        <RequestedBeerItem key={requestBeer.beerId} {...requestBeer} />
      ))}
      {hasNextPage && <LoadingIcon />}
    </>
  );
};

export default BeerRequestListPage;

const StyledTotalNumber = styled.p`
  margin: 10px 22px 16px;
  ${(p) => p.theme.fonts.Body1};
  color: ${(p) => p.theme.color.whiteOpacity80};
  text-align: end;
`;
