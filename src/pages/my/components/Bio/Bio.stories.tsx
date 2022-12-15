import { level } from '@/constants/dummy';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Bio from './Bio';

export default {
  title: 'Components/mypage/Bio',
  component: Bio,
  args: {
    remainRecordCount: 1,
    userLevel: level,
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
