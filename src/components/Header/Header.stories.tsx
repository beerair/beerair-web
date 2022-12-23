import styled from '@emotion/styled';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { BackButton, CloseButton } from './extras';
import Header from './Header';

export default {
  component: Header,
  argTypes: {
    isTransparent: { control: 'boolean' },
  },
  args: {
    isTransparent: false,
  },
  decorators: [
    (Story) => (
      <main>
        <Story />
        {Array(100)
          .fill(0)
          .map((_, index) => (
            <p key={index} style={{ color: 'white' }}>
              스크롤
            </p>
          ))}
      </main>
    ),
  ],
} as ComponentMeta<typeof Header>;

export const 뒤로가기_헤더: ComponentStoryObj<typeof Header> = {
  args: {
    leftExtras: <BackButton />,
    children: '제목',
  },
};

export const 닫기_헤더: ComponentStoryObj<typeof Header> = {
  args: {
    leftExtras: <CloseButton />,
  },
};

const StyledSearchHeader = styled(Header)`
  border-bottom: 1px solid ${(p) => p.theme.semanticColor.secondary};
`;

export const 맥주_검색_페이지: ComponentStoryObj<typeof Header> = {
  render: (args) => <StyledSearchHeader {...args} />,
  args: {
    leftExtras: <BackButton />,
    children: '검색창 컴포넌트',
  },
};
