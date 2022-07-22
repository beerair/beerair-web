import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileBio, { IProfileBio } from './ProfileBio';

export default {
  title: 'Components/profile/ProfileBio',
  component: ProfileBio,
  args: {
    remainRecord: 1,
    userLevel: {
      id: 1,
      tier: 1,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
      req: 5,
    },
    nickname: '호딩',
    email: 'gywls00100@gmail.com',
  },
} as ComponentMeta<typeof ProfileBio>;

const Template: ComponentStory<typeof ProfileBio> = ({ ...args }) => <ProfileBio {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <Story />
    </div>
  ),
];
