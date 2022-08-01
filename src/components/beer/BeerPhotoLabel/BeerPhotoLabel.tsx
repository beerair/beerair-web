import React from 'react';
import styled from '@emotion/styled';

import { IBeer } from '@/types';
import Icon from '@/components/commons/Icon';
import { sliceAndUpperCase } from '@/utils/string';

interface BeerPhotoLabelProps {
  beer: IBeer;
  background?: string;
}

interface StyledBeerPhotoLabelProps {
  ticketBackground?: string;
}

const BeerPhotoLabel: React.FC<BeerPhotoLabelProps> = ({ background, beer }) => (
  <StyledBeerPhotoLabel ticketBackground={background}>
    {background && <div className="ticket-background-img" />}
    <div>
      <Icon name="Airplane" size={20} color="whiteOpacity35" />
    </div>
    <div className="beer-photo-title">
      <span className="beer-country">{sliceAndUpperCase(beer.country?.nameEng || 'non', 3)}</span>
      <div className="beer-label-detail">
        {`${beer.alcohol.toFixed(1)}%`}
        <span className="beer-label-detail-split-dot">{'•'}</span>
        {beer.type?.nameKor}
      </div>
    </div>
    <span className="beer-name">{beer.nameKor}</span>
  </StyledBeerPhotoLabel>
);

const StyledBeerPhotoLabel = styled.div<StyledBeerPhotoLabelProps>`
  position: relative;
  background: ${({ theme }) => theme.semanticColor.primary};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 180px;
  padding: 20px;
  display: flex;
  flex-direction: column;

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
`;

export default BeerPhotoLabel;
