import { ComponentStory, ComponentMeta } from '@storybook/react';

import Bio from './Bio';

export default {
  title: 'Components/mypage/Bio',
  component: Bio,
  args: {
    remainRecordCount: 1,
    userLevel: {
      id: 1,
      tier: 1,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
      req: 5,
    },
    nickname: '비어에어',
    email: 'beerair.official@gmail.com',
  },
} as ComponentMeta<typeof Bio>;

const Template: ComponentStory<typeof Bio> = ({ ...args }) => <Bio {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <Story />
    </div>
  ),
];
