import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from '@emotion/styled';

import Swiper from './Swiper';

export default {
  component: Swiper,
} as ComponentMeta<typeof Swiper>;

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${(p) => p.theme.color.whiteOpacity20};
`;

const Template: ComponentStory<typeof Swiper> = (args) => (
  <Swiper {...args}>
    {Array(6)
      .fill(0)
      .map((_, index) => (
        <PageWrapper key={index}>page {index + 1}</PageWrapper>
      ))}
  </Swiper>
);

export const Default = Template.bind({});
Default.args = {};
