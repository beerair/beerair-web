import styled from '@emotion/styled';

import Header from '@/components/commons/Header';
import { BackButton } from '@/components/commons/Header/extras';
import LoadingIcon from '@/components/commons/LoadingIcon';
import RequestedBeerItem from '@/components/beer-request/RequestedBeerItem';
import { requestBeer } from '@/constants/dummy';
import { REQUEST_BEER_STATUS } from '@/types';

const BeerRequestListContainer = () => {
  const hasNextPage = true;
  const resultCount = 4;
  return (
    <>
      <Header leftExtras={<BackButton />}>요청한 맥주 현황</Header>
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

export default BeerRequestListContainer;

const StyledTotalNumber = styled.p`
  margin: 10px 22px 16px;
  ${(p) => p.theme.fonts.Body1};
  color: ${(p) => p.theme.color.whiteOpacity80};
  text-align: end;
`;
