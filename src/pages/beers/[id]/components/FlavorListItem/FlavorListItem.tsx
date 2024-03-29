import styled from '@emotion/styled';
import React from 'react';

import { IFlavor, IFlavorByBeer } from '@/types';

import LikeBadge from './LikeBadge';

export interface IFlavorProps {
  content: IFlavor['content'];
  count: IFlavorByBeer['count'];
}

const FlavorListItem = ({ content, count }: IFlavorProps) => {
  return (
    <StyledFlavorListItem>
      {content}
      <LikeBadge count={count} />
    </StyledFlavorListItem>
  );
};

export default FlavorListItem;

const StyledFlavorListItem = styled.div`
  ${({ theme }) => theme.fonts.SubTitle5}
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 49px;
  border-radius: 8px;
  padding: 16px 20px;
  transition: background 0.3s;
  word-break: keep-all;
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;
