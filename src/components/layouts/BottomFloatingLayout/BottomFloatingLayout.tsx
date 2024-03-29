import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

export const BOTTOM_FLOATING_BUTTON_AREA_HEIGHT = 100;

interface BottomFloatingLayoutProps extends HTMLAttributes<HTMLDivElement> {
  bottomOffset?: number;
  className?: string;
  children?: React.ReactNode;
}

const BottomFloatingLayout: React.FC<BottomFloatingLayoutProps> = ({
  bottomOffset = 0,
  className,
  children,
  ...rest
}) => {
  return (
    <StyledBottomFloatingButton className={className} bottomOffset={bottomOffset} {...rest}>
      {children}
    </StyledBottomFloatingButton>
  );
};

export default BottomFloatingLayout;

const StyledBottomFloatingButton = styled.div<{ bottomOffset: number }>`
  position: fixed;
  bottom: ${({ bottomOffset }) => bottomOffset}px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100vw;
  height: ${BOTTOM_FLOATING_BUTTON_AREA_HEIGHT}px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 40.1%);
  z-index: 1;
`;
