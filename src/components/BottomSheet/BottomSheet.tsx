import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

import ModalLayout from '@/components/layouts/ModalLayout';
import { theme } from '@/themes';

const showUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const hideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const StyledBottomSheet = styled.div<Pick<BottomSheetProps, 'open' | 'isFull' | 'backgroundColor'>>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  ${(p) => (p.isFull ? 'height: 90%;' : '')};
  max-height: 90%;
  border-radius: 20px 20px 0 0;

  background-color: ${(p) => p.backgroundColor};

  overflow: hidden;

  transform: ${(p) => (p.open ? `translateY(0)` : `translateY(100%)`)};

  ${(p) =>
    css`
      animation: ${p.open ? showUp : hideDown} 0.3s forwards;
    `};
`;

interface BottomSheetProps {
  open: boolean;
  children: ReactNode;
  onDimClick?: VoidFunction;
  /** 화면의 90%를 차지하는 바텀시트임의 여부 (default: false) */
  isFull?: boolean;
  /** 백그라운드 색상 (default: #222222) */
  backgroundColor?: string;
  className?: string;
}

const DEFAULT_BACKGROUND_COLOR = theme.color.grey5;

const BottomSheet: React.FC<BottomSheetProps> = ({
  open,
  children,
  onDimClick,
  isFull = false,
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
  className,
}) => {
  return (
    <ModalLayout open={open} onDimClick={onDimClick}>
      <StyledBottomSheet
        open={open}
        isFull={isFull}
        backgroundColor={backgroundColor}
        className={className}
        aria-modal="true"
      >
        {children}
      </StyledBottomSheet>
    </ModalLayout>
  );
};

export default BottomSheet;
