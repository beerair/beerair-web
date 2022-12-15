import { MYPAGE_BOX_BUTTON_LIST_DATA } from '@/constants/dummy';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyPageBoxButtonList from './MyPageBoxButtonList';

export default {
  title: 'Components/MyPage/MyPageBoxButtonList',
  component: MyPageBoxButtonList,
} as ComponentMeta<typeof MyPageBoxButtonList>;

const Template: ComponentStory<typeof MyPageBoxButtonList> = ({ ...args }) => (
  <MyPageBoxButtonList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  myPageBoxButtonListItems: MYPAGE_BOX_BUTTON_LIST_DATA,
};
Default.decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <Story />
    </div>
  ),
];
