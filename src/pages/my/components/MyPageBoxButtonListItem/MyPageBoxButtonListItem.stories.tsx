import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyPageBoxButtonListItem from './MyPageBoxButtonListItem';

export default {
  component: MyPageBoxButtonListItem,
} as ComponentMeta<typeof MyPageBoxButtonListItem>;

const Template: ComponentStory<typeof MyPageBoxButtonListItem> = ({ ...args }) => (
  <MyPageBoxButtonListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  iconName: 'Heart',
  text: '내가 반한 맥주',
  count: 3,
  unit: '개',
};
