import React from 'react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

const Me = (props: Props) => {
  const { className, ...rest } = props;

  return (
    <StyledMe className={className} {...rest}>
      ME
    </StyledMe>
  );
};

export default Me;

const StyledMe = styled.span`
  ${({ theme }) => theme.fonts.SmallBold3};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.semanticColor.primary};
  border-radius: 13px;
  padding: 2px 8px;
  height: 16px;
`;
