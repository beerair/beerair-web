import styled from '@emotion/styled';
import React from 'react';

import Emoji from '@/components/Emoji';
import { useElementSize } from '@/hooks';
import { ellipsis } from '@/styles/common';
import { IBeer } from '@/types';

import LikeBeerToggleButton from '../LikeBeerToggleButton';

interface BeerGridItemProps {
  beer: Pick<IBeer, 'id' | 'korName' | 'imageUrl' | 'myReview' | 'liked'>;
}

const BeerGridItem = ({ beer }: BeerGridItemProps) => {
  const { id, korName, imageUrl, myReview, liked } = beer;
  const feelState = myReview?.feelStatus;

  const { ref, size } = useElementSize<HTMLDivElement>();
  const itemHeight = size?.width;

  return (
    <StyledBeerGridItem>
      <BeerGridItemContainer ref={ref} feel={feelState} height={itemHeight}>
        <LikeBeerToggleButtonWrapper>
          <LikeBeerToggleButton liked={liked} id={id} />
        </LikeBeerToggleButtonWrapper>
        <StyledEmoji>
          <Emoji feel={feelState} />
        </StyledEmoji>
        <BeerImage src={imageUrl} />
      </BeerGridItemContainer>
      <BeerName>{korName}</BeerName>
    </StyledBeerGridItem>
  );
};

export default BeerGridItem;

const StyledBeerGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const BeerName = styled.div`
  ${({ theme }) => theme.fonts.SubTitle5}
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  width: 95%;
  ${ellipsis()};
`;

const BeerGridItemContainer = styled.div<{ feel?: number | null; height?: number }>`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  ${({ height }) => (height ? `height: ${height}px;` : '')};
  background: ${({ feel, theme }) =>
    feel !== null ? theme.color.blue : theme.color.whiteOpacity20};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const BeerImage = styled.img`
  width: 30%;
  height: auto;
  max-height: calc(100% - 20px);
  object-fit: contain;
`;

const StyledEmoji = styled.div`
  position: absolute;
  bottom: -4px;
  right: -4px;
  z-index: 1;
`;
