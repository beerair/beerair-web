import styled from '@emotion/styled';
import { ReactNode } from 'react';

import { ellipsis } from '@/styles/common';

export const HEADER_HEIGHT = 60;

interface HeaderProps {
  children?: ReactNode;
  /** 좌측 추가 컴포넌트 */
  leftExtras?: ReactNode;
  /** 우측 추가 컴포넌트 */
  rightExtras?: ReactNode;
  /** 배경 투명 여부 (default: false) */
  isTransparent?: boolean;
  /** 상단 고정 여부 (default: false) */
  isTopFixed?: boolean;
  className?: string;
}

const Header = ({
  children,
  leftExtras,
  rightExtras,
  isTransparent = false,
  isTopFixed = false,
  className,
}: HeaderProps) => {
  return (
    <StyledHeader className={className} isTransparent={isTransparent} isTopFixed={isTopFixed}>
      <StyledLeftExtras>{leftExtras}</StyledLeftExtras>
      <StyledTitle>
        {typeof children === 'string' ? <StyledH1>{children}</StyledH1> : children}
      </StyledTitle>
      <StyledRightExtras>{rightExtras}</StyledRightExtras>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header<Pick<HeaderProps, 'isTransparent' | 'isTopFixed'>>`
  ${(p) =>
    p.isTopFixed
      ? `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      max-width: 768px;
      margin: 0 auto;
      `
      : ''}

  display: flex;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 0 20px;
  z-index: 100;

  background-color: ${(p) => (p.isTransparent ? 'transparent' : p.theme.color.black100)};
  transition: background-color 0.5s;

  > div {
    display: flex;
    align-items: center;
  }
`;

const StyledLeftExtras = styled.div`
  > *:not(:first-of-type) {
    margin-left: 8px;
  }

  > *:last-child {
    margin-right: 12px;
  }
`;

const StyledRightExtras = styled.div`
  > *:not(:last-child) {
    margin-right: 8px;
  }

  > *:first-of-type {
    margin-left: 12px;
  }
`;

const StyledTitle = styled.div`
  flex: 1;
  height: 100%;
`;

const StyledH1 = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${(p) => p.theme.color.white};

  ${ellipsis()};
`;
