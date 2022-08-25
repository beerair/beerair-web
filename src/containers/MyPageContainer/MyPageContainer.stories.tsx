import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyPageContainer from './MyPageContainer';

export default {
  title: 'Pages/마이페이지',
  component: MyPageContainer,
  argTypes: {
    nickname: { control: 'text', name: 'nickname' },
    email: { control: 'text', name: 'email' },
    drankBeerCount: { control: 'number' },
    ticketCount: { control: 'number' },
    travelCount: { control: 'number' },
    likedBeerCount: { control: 'number' },
    requestBeerCount: { control: 'number' },
  },
  args: {
    nickname: '호딩',
    email: 'gywls00100@gmail.com',
    drankBeerCount: 0,
    ticketCount: 0,
    travelCount: 0,
    likedBeerCount: 0,
    requestBeerCount: 0,
  },
} as ComponentMeta<typeof MyPageContainer>;

const Template: ComponentStory<typeof MyPageContainer> = (args) => <MyPageContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.story = {
  parameters: {
    nextRouter: {
      path: '/my',
      asPath: '/my',
    },
  },
};
