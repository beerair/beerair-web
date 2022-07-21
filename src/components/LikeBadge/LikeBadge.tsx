import React from 'react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

import Icon from '@/components/commons/Icon';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  count: number;
}

const LikeBadge = (props: Props) => {
  const { className, count, ...rest } = props;

  return (
    <StyledLikeBadge className={className} {...rest}>
      <Icon name="Like" size={14} />
      <Count>{count}</Count>
    </StyledLikeBadge>
  );
};

export default LikeBadge;

const StyledLikeBadge = styled.div`
  ${({ theme }) => theme.fonts.SmallBold2}
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.semanticColor.primary};
  border-radius: 38px;
  padding: 7px 13px;
  width: 60px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Count = styled.span`
  display: inline-block;
`;
