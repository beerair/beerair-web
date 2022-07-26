import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyPageInfoList, { IMyPageInfoListItem } from './MyPageInfoList';

const DATA: IMyPageInfoListItem[] = [
  { count: 1, unit: '캔', title: '마신 맥주' },
  { count: 2, unit: '개', title: '기록한 티켓' },
  { count: 3, unit: '개국', title: '여행한 나라' },
];

export default {
  title: 'Components/mypage/MyPageInfoList',
  component: MyPageInfoList,
  args: { data: DATA },
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
