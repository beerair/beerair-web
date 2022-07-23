import { ComponentStory, ComponentMeta } from '@storybook/react';

import AirPort from './AirPort';

export default {
  title: 'Components/beer-detail/AirPort',
  component: AirPort,
  args: {
    startCountry: {
      nameKor: '독일',
      nameEng: 'FRA',
    },
    endCountry: {
      nameKor: '대한민국',
      nameEng: 'KOR',
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
