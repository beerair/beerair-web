import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IProfileBoxButtonListItem } from '../ProfileBoxButtonListItem';

import ProfileBoxButtonList from './ProfileBoxButtonList';

const DATA: IProfileBoxButtonListItem[] = [
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
  title: 'Components/profile/ProfileBoxButtonList',
  component: ProfileBoxButtonList,
} as ComponentMeta<typeof ProfileBoxButtonList>;

const Template: ComponentStory<typeof ProfileBoxButtonList> = ({ ...args }) => (
  <ProfileBoxButtonList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: DATA,
};
Default.decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <Story />
    </div>
  ),
];
