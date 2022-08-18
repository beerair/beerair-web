import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <StyledMain>{children}</StyledMain>;
};

const StyledMain = styled.main`
  position: relative;
  width: 100%;
  max-width: 768px;
  min-height: 100vh;
  margin: 0 auto;

  background-color: ${(p) => p.theme.semanticColor.background};
`;

export default MainLayout;
