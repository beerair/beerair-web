import styled from '@emotion/styled';
import React from 'react';

import Icon from '@/components/Icon';
import { IBeer } from '@/types';
import { sliceAndUpperCase } from '@/utils/string';

interface BeerPhotoLabelProps {
  beer: IBeer;
  background?: string;
  scale?: number;
  className?: string;
}

const BeerPhotoLabel: React.FC<BeerPhotoLabelProps> = ({
  background,
  beer,
  scale = 1,
  className,
}) => {
  // scale을 통해 크기를 조절하더라도 width는 100%로 유지
  const boxWidth = (1 / scale) * 100;

  return (
    <StyledBeerPhotoLabel
      ticketBackground={background}
      boxScale={scale}
      boxWidth={boxWidth}
      className={className}
    >
      <div className="beer-photo-label-main">
        {background && <div className="ticket-background-img" />}
        <div>
          <Icon name="Airplane" size={20} color="whiteOpacity35" />
        </div>
        <div className="beer-photo-title">
          <span className="beer-country">
            {sliceAndUpperCase(beer.country?.engName || 'non', 3)}
          </span>
          <div className="beer-label-detail">
            {`${beer.alcohol.toFixed(1)}%`}
            <span className="beer-label-detail-split-dot">{'•'}</span>
            {beer.type?.korName}
          </div>
        </div>
        <span className="beer-name">{beer.korName}</span>
      </div>
    </StyledBeerPhotoLabel>
  );
};

interface StyledBeerPhotoLabelProps {
  ticketBackground?: string;
  boxScale: number;
  boxWidth: number;
}

const StyledBeerPhotoLabel = styled.div<StyledBeerPhotoLabelProps>`
  height: calc(180px * ${({ boxScale }) => boxScale});

  & > .beer-photo-label-main {
    position: relative;
    background: ${({ theme }) => theme.semanticColor.primary};
    color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: 180px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transform: scale(${({ boxScale }) => boxScale});
    transform-origin: 0 0;
    width: ${({ boxWidth }) => boxWidth}%;

    & > .beer-photo-title {
      display: flex;
      align-items: flex-end;
      margin: 10px 0 18px;

      & > .beer-country {
        ${({ theme }) => theme.fonts.Abbr1}
        line-height: 30px;
      }

      & > .beer-label-detail {
        ${({ theme }) => theme.fonts.SmallBold3}
        color: ${({ theme }) => theme.color.whiteOpacity65};
        margin-left: 8px;

        & > .beer-label-detail-split-dot {
          margin: 0 4px;
        }
      }
    }

    & > .ticket-background-img {
      background-image: url(${({ ticketBackground }) => ticketBackground});
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      background-repeat: no-repeat;
      background-position: right;
      mask-image: linear-gradient(253.61deg, rgba(0, 0, 0, 0.6) 0%, rgba(255, 255, 255, 0) 65.72%);
      filter: grayscale(100%);
    }

    & > .beer-name {
      ${({ theme }) => theme.fonts.H5}
      display: inline-block;
      width: 60%;
      word-break: keep-all;
      text-align: left;
    }
  }
`;

export default BeerPhotoLabel;
