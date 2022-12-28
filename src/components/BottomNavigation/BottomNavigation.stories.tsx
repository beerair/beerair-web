import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ROUTE_PATH } from '@/constants/routes';

import BottomNavigation from './BottomNavigation';

export default {
  component: BottomNavigation,
} as ComponentMeta<typeof BottomNavigation>;

const Container = styled.div`
  background-color: #000;
  color: #fff;
`;

const Template: ComponentStory<typeof BottomNavigation> = () => (
  <Container>
    {Array(100)
      .fill(0)
      .map((_, index) => (
        <div key={index}>스크롤</div>
      ))}
    <BottomNavigation />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};

Default.story = {
  parameters: {
    nextRouter: {
      path: ROUTE_PATH.HOME,
    },
  },
};
