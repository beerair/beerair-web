import styled from '@emotion/styled';
import React from 'react';

import { IBeer } from '@/types';

interface Props {
  beerData: IBeer;
}

const BeerInfoBox = ({ beerData }: Props) => {
  const { country, type, korName, engName, imageUrl, alcohol, price, volume } = beerData;

  const beerInfo = [
    { key: '종류', value: type?.korName },
    { key: '원산지', value: country?.korName },
    { key: '도수', value: `${alcohol}%` },
    { key: '용량', value: `${volume}ml` },
    { key: '가격', value: `${price}원` },
  ];

  return (
    <StyledBeerDetail>
      <BeerName>{korName}</BeerName>
      <BeerNameEng>{engName}</BeerNameEng>

      <FlexContainer>
        <BeerImage src={imageUrl} />
        <InfoList>
          {beerInfo.map(({ key, value }) => (
            <InfoListItem key={key}>
              <Key>{key}</Key>
              <Value>{value}</Value>
            </InfoListItem>
          ))}
        </InfoList>
      </FlexContainer>
    </StyledBeerDetail>
  );
};

export default BeerInfoBox;

const StyledBeerDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 17.48rem;
  padding: 1.7rem;
  background-color: ${({ theme }) => theme.color.black80};
  border-radius: 12px;
`;

const BeerName = styled.h1`
  ${({ theme }) => theme.fonts.H5};
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 8px;
`;

const BeerNameEng = styled.h2`
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.color.whiteOpacity65};
  margin-bottom: 30px;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const BeerImage = styled.img`
  width: 70px;
  height: auto;
  margin-right: 30px;
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: auto 0;
`;

const InfoListItem = styled.li`
  display: flex;
`;

const Key = styled.span`
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.color.whiteOpacity80};
  width: 50px;
  margin-right: 16px;
`;

const Value = styled.span`
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.color.white};
`;
