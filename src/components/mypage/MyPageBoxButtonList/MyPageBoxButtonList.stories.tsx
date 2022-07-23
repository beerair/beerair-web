import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IMyPageBoxButtonListItem } from '../MyPageBoxButtonListItem';

import MyPageBoxButtonList from './MyPageBoxButtonList';

const MYPAGE_BOX_BUTTON_LIST_DATA: IMyPageBoxButtonListItem[] = [
  {
    iconName: 'Heart',
    text: '내가 반한 맥주',
    count: 3,
    unit: '개',
  },
  {
    iconName: 'PlusCircle',
    text: '요청한 맥주 현황',
    count: 3,
    unit: '개',
  },
  {
    iconName: 'ThreeDot',
    text: '기타',
  },
];

export default {
  title: 'Components/MyPage/MyPageBoxButtonList',
  component: MyPageBoxButtonList,
} as ComponentMeta<typeof MyPageBoxButtonList>;

const Template: ComponentStory<typeof MyPageBoxButtonList> = ({ ...args }) => (
  <MyPageBoxButtonList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  myPageBoxButtonListData: MYPAGE_BOX_BUTTON_LIST_DATA,
};
Default.decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <Story />
    </div>
  ),
];
