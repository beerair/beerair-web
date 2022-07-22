import React, { ReactNode, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

/**
 * @todo z-index design system 구축 (관련이슈 #85)
 * max-width: 768px -> breakpoint로 관리
 */
const StyledContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  max-width: 768px;
  margin: 0 auto;
  height: 100%;

  overflow: hidden;
  z-index: 100;

  ${(p) => !p.open && 'pointer-events: none;'}
`;

const fadeIn = keyframes`
from {
 opacity:0;
}

to {
 opacity:1;
}
`;

const fadeOut = keyframes`
from {
 opacity:1;
}

to {
 opacity:0;
}
`;

/** @todo z-index design system 구축 (관련이슈 #85) */
const StyledDim = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;

  background-color: rgba(51, 51, 51, 0.8);
  z-index: 100;

  ${(p) =>
    css`
      animation: ${p.open ? fadeIn : fadeOut} 0.3s forwards;
    `};
`;

interface ModalLayoutProps {
  open: boolean;
  children: ReactNode;
  onDimClick?: VoidFunction;
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ open, children, onDimClick }) => {
  const dimRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsModalLayoutVisible(open, dimRef);

  if (typeof document === 'undefined') {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return createPortal(
    <StyledContainer open={open}>
      <StyledDim ref={dimRef} open={open} onClick={onDimClick} />
      {children}
    </StyledContainer>,
    document.body,
  );
};

export default ModalLayout;

const useIsModalLayoutVisible = (open: boolean, dimRef: RefObject<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState<boolean>(open);

  const showModalLayout = useCallback(() => {
    if (open && !isVisible) {
      setIsVisible(true);
    }
  }, [open, isVisible]);

  const hideModalLayout = useCallback(() => {
    if (!open && isVisible) {
      setIsVisible(false);
    }
  }, [open, isVisible]);

  useEffect(() => {
    showModalLayout();
  }, [open, isVisible, showModalLayout]);

  /** 애니메이션이 끝난 후에 모달이 안보이도록 함 */
  useEffect(() => {
    dimRef.current?.addEventListener('animationend', hideModalLayout);

    return () => {
      dimRef.current?.removeEventListener('animationend', hideModalLayout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hideModalLayout]);

  return isVisible;
};
