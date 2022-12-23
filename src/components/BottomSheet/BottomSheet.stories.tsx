import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BottomSheet from './BottomSheet';

export default {
  component: BottomSheet,
  argTypes: {
    open: { control: 'boolean' },
    isFull: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    children: { control: 'readonly' },
    onClick: { control: 'readonly' },
  },
  args: {
    open: true,
    isFull: true,
  },
} as ComponentMeta<typeof BottomSheet>;

const StyledWrapper = styled.div`
  height: 60px;
  padding: 16px;
  color: ${(p) => p.theme.color.white};

  h1 {
    ${(p) => p.theme.fonts.SubTitle5};
    margin-bottom: 8px;
  }
`;

const Template: ComponentStory<typeof BottomSheet> = (args) => {
  return (
    <BottomSheet {...args}>
      <StyledWrapper>
        <h1>바텀시트 📝</h1>
        <p>스토리북에서는 onClose prop을 넘겨주지 않아 dim 영역을 클릭해도 닫히지 않습니다 🥲</p>
      </StyledWrapper>
    </BottomSheet>
  );
};

export const Default = Template.bind({});
Default.args = {};
