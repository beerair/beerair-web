import { MYPAGE_INFO_LIST_DATA } from '@/constants/dummy';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyPageInfoList from './MyPageInfoList';

export default {
  title: 'Components/mypage/MyPageInfoList',
  component: MyPageInfoList,
  args: { data: MYPAGE_INFO_LIST_DATA },
} as ComponentMeta<typeof MyPageInfoList>;

const Template: ComponentStory<typeof MyPageInfoList> = ({ ...args }) => (
  <MyPageInfoList {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <Story />
    </div>
  ),
];
