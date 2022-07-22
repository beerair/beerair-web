import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileInfoList, { IProfileInfoListItem } from './ProfileInfoList';

const DATA: IProfileInfoListItem[] = [
  { count: 1, unit: '캔', title: '마신 맥주' },
  { count: 2, unit: '개', title: '기록한 티켓' },
  { count: 3, unit: '개국', title: '여행한 나라' },
];

export default {
  title: 'Components/profile/ProfileInfoList',
  component: ProfileInfoList,
  args: { data: DATA },
} as ComponentMeta<typeof ProfileInfoList>;

const Template: ComponentStory<typeof ProfileInfoList> = ({ ...args }) => (
  <ProfileInfoList {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <Story />
    </div>
  ),
];
