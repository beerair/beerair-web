import { ReactNode } from 'react';
import styled from '@emotion/styled';

import Icon from '@/components/Icon';

interface BeerRequestLayoutProps {
  title: string;
  children: ReactNode;
}

const BeerRequestLayout: React.FC<BeerRequestLayoutProps> = ({ title, children }) => {
  return (
    <StyledContainer>
      <Icon className="barcode-top" name="Barcode" width="240px" height="24px" />
      <StyledWrapper>
        <h1>{title}</h1>
        {children}
      </StyledWrapper>
      <Icon className="barcode-bottom" name="Barcode" width="240px" height="60px" />
    </StyledContainer>
  );
};

const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc(100% - 40px);
  max-width: 500px;
  min-height: 70vh;
  padding: 70px 0 90px 0;
  margin: 26px auto;
  border-radius: 20px;

  background-color: ${(p) => p.theme.color.white};

  overflow: hidden;

  > .barcode-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  > .barcode-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-left: 12px solid ${(p) => p.theme.color.yellow};
  border-right: 12px solid ${(p) => p.theme.color.yellow};

  > h1 {
    margin: 4px 0 0;
    ${(p) => p.theme.fonts.H4};
    color: ${(p) => p.theme.color.black100};
    text-align: center;
    white-space: pre-line;
  }
`;

export default BeerRequestLayout;
