import styled from '@emotion/styled';
import React from 'react';

import Emoji from '@/components/Emoji';
import { ellipsis } from '@/styles/common';
import { IBeer } from '@/types';

import LikeBeerToggleButton from '../LikeBeerToggleButton';

type BeerListItemProps = Pick<
  IBeer,
  'id' | 'country' | 'type' | 'korName' | 'imageUrl' | 'alcohol' | 'myReview' | 'liked'
>;

interface Props {
  beer: BeerListItemProps;
}

const BeerListItem = ({ beer }: Props) => {
  const { id, korName, type, alcohol, country, imageUrl, myReview, liked } = beer;
  const feelState = myReview?.feelStatus;

  return (
    <StyledBeerListItem>
      <ColorBar feel={feelState} />
      <StyledEmoji>
        <Emoji feel={feelState} />
      </StyledEmoji>
      <LikeBeerToggleButtonWrapper>
        <LikeBeerToggleButton liked={liked} id={id} />
      </LikeBeerToggleButtonWrapper>
      <BeerImage src={imageUrl} />
      <TextContainer>
        <BeerName>{korName}</BeerName>
        <BeerInfo>
          {country?.korName} · {type?.korName} · {alcohol?.toFixed(1)}%
        </BeerInfo>
      </TextContainer>
    </StyledBeerListItem>
  );
};

export default BeerListItem;

const StyledBeerListItem = styled.div`
  width: calc(100% - 26px);
  aspect-ratio: 315 / 80;
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
  border-radius: 6px;
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 26px;
`;

const LikeBeerToggleButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 1px;
  right: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  z-index: 1;
`;

const ColorBar = styled.div<{ feel?: number | null }>`
  width: 16px;
  height: 100%;
  background: ${({ feel, theme }) =>
    feel !== null ? theme.color.blue : theme.color.whiteOpacity20};
  border-radius: 6px 0 0 6px;
`;

const StyledEmoji = styled.div`
  position: absolute;
  left: -26px;
  top: 50%;
  transform: translateY(-50%);
`;

const BeerImage = styled.img`
  width: 25px;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  margin: 0 14px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const BeerName = styled.div`
  width: calc(100% - 60px);
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.fonts.SubTitle4};
  ${ellipsis()};
  text-align: left;
`;

const BeerInfo = styled.div`
  color: ${({ theme }) => theme.color.whiteOpacity80};
  ${({ theme }) => theme.fonts.SubTitle5};
  text-align: left;
`;
