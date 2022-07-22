import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileBoxButtonListItem from './ProfileBoxButtonListItem';

export default {
  title: 'Components/profile/ProfileBoxButtonListItem',
  component: ProfileBoxButtonListItem,
} as ComponentMeta<typeof ProfileBoxButtonListItem>;

const Template: ComponentStory<typeof ProfileBoxButtonListItem> = ({ ...args }) => (
  <ProfileBoxButtonListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  iconName: 'Heart',
  text: '내가 반한 맥주',
  count: 3,
  unit:'개'
};
