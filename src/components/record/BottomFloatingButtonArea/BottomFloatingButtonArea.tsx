import type { HTMLAttributes } from 'react';
import Icon from '@/components/commons/Icon';
import Link from 'next/link';
import Spacing from '@/components/commons/Spacing';
import styled from '@emotion/styled';

export const BOTTOM_FLOATING_BUTTON_AREA_HEIGHT = 100;

interface BottomFloatingButtonAreaProps extends HTMLAttributes<HTMLDivElement> {
  button?: React.ReactNode;
  withHomeButton?: boolean;
  isOnlyHomeButton?: boolean;
  bottomOffset?: number;
  className?: string;
  children?: React.ReactNode;
}

const BottomFloatingButtonArea: React.FC<BottomFloatingButtonAreaProps> = ({
  button,
  withHomeButton = false,
  isOnlyHomeButton = false,
  bottomOffset = 0,
  className,
  children,
}) => {
  return (
    <>
      <Spacing size={BOTTOM_FLOATING_BUTTON_AREA_HEIGHT + bottomOffset} />
      <StyledBottomFloatingButton className={className} bottomOffset={bottomOffset}>
        {children}
        {!isOnlyHomeButton && button}
        {withHomeButton && (
          <Link href="/" passHref>
            <StyledHomeIconButton>
              <Icon name="Home" size={30} color="blue" />
            </StyledHomeIconButton>
          </Link>
        )}
      </StyledBottomFloatingButton>
    </>
  );
};

export default BottomFloatingButtonArea;

const StyledBottomFloatingButton = styled.div<{ bottomOffset: number }>`
  position: fixed;
  bottom: ${({ bottomOffset }) => bottomOffset}px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: ${BOTTOM_FLOATING_BUTTON_AREA_HEIGHT}px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 40.1%);
  z-index: 1;
`;

const StyledHomeIconButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
`;
