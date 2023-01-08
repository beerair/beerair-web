import { ComponentStory, ComponentMeta } from '@storybook/react';

import AirPort from './AirPort';

export default {
  component: AirPort,
  args: {
    startCountry: {
      korName: '독일',
      engName: 'FRA',
    },
    endCountry: {
      korName: '대한민국',
      engName: 'KOR',
    },
  },
} as ComponentMeta<typeof AirPort>;

const Template: ComponentStory<typeof AirPort> = (args) => <AirPort {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <Story />
    </div>
  ),
];
