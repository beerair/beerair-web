import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerRequestLayout from './BeerRequestLayout';

export default {
  component: BeerRequestLayout,
  args: {
    title: '등록할 맥주의 정보를\n입력해 주세요',
  },
} as ComponentMeta<typeof BeerRequestLayout>;

const Template: ComponentStory<typeof BeerRequestLayout> = (args) => (
  <BeerRequestLayout {...args} />
);

export const 맥주요청_레이아웃 = Template.bind({});
