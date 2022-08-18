import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import Icon from '@/components/commons/Icon';
import { ColorTheme } from '@/themes/types';

interface BeginningLayoutProps {
  children: ReactNode;
  title?: string;
  cloudColor?: keyof ColorTheme['color'];
}

const BeginningLayout = ({ title, children, cloudColor = 'white' }: BeginningLayoutProps) => {
  return (
    <StyledContainer>
      <StyledHeader>
        <Icon name="Logo" size={80} aria-label="비어에어 로고" />
      </StyledHeader>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledWrapper>{children}</StyledWrapper>
      <StyledCloudWrapper cloudColor={cloudColor}>
        <Icon className="cloud" name="Cloud" aria-hidden />
      </StyledCloudWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  /** 아이폰 상단 노치 영역 대응 */
  @supports (padding-top: calc(env(safe-area-inset-top) + 14px)) {
    padding-top: calc(env(safe-area-inset-top) + 14px);
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px 0;
`;

const SlideUp = keyframes`
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity:1;
  }
`;

const StyledTitle = styled.h1`
  margin: 74px 34px 20px;
  ${(p) => p.theme.fonts.H5};
  white-space: pre-line;

  animation: ${SlideUp} 0.5s forwards;
`;

const StyledWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
`;

const StyledCloudWrapper = styled.div<{ cloudColor: BeginningLayoutProps['cloudColor'] }>`
  position: relative;
  width: 100%;
  margin-top: 1px;

  .cloud {
    width: 100% !important;
    fill: ${(p) => p.theme.color[p.cloudColor || 'white']};
  }

  &::before {
    content: '';
    position: absolute;
    top: -24px;
    left: 0;
    width: 100%;
    height: 24px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 100%);
  }
`;

export default BeginningLayout;
