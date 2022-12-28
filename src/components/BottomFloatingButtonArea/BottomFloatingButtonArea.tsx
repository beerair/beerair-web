import styled from '@emotion/styled';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';

import Icon from '@/components/Icon';
import BottomFloatingLayout from '@/components/layouts/BottomFloatingLayout';
import { ROUTE_PATH } from '@/constants/routes';

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
    <BottomFloatingLayout bottomOffset={bottomOffset} className={className}>
      {children}
      {!isOnlyHomeButton && button}
      {withHomeButton && (
        <Link href={ROUTE_PATH.HOME} passHref>
          <StyledHomeIconButton>
            <Icon name="Home" size={30} color="blue" />
          </StyledHomeIconButton>
        </Link>
      )}
    </BottomFloatingLayout>
  );
};

export default BottomFloatingButtonArea;

const StyledHomeIconButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
`;
