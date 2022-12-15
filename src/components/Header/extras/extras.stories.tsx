import { BackButton, CloseButton, ShareButton } from '.';

import { ReactNode } from 'react';
import styled from '@emotion/styled';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  argTypes: {
    type: { control: 'radio', options: ['grid', 'list'] },
  },
  args: {},
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;

  h1 {
    ${(p) => p.theme.fonts.H1};
    margin-bottom: 10px;
  }
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  p {
    ${(p) => p.theme.fonts.Body2};
    margin-right: 10px;
  }
`;

export const extras = () => {
  const renderExtra = (name: string, extra: ReactNode) => {
    return (
      <StyledRow>
        <p>{name}</p>
        {extra}
      </StyledRow>
    );
  };

  return (
    <StyledContainer>
      <h1>Header extras</h1>
      {renderExtra('BackButton', <BackButton />)}
      {renderExtra('CloseButton', <CloseButton />)}
      {renderExtra('ShareButton', <ShareButton />)}
    </StyledContainer>
  );
};
