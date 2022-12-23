import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import BeginningLayout from './BeginningLayout';

export default {
  component: BeginningLayout,
  args: {
    title: '계정을 등록하면\n맥주에 대한 평가를\n기록하고 공유할 수 있습니다!',
  },
} as ComponentMeta<typeof BeginningLayout>;

const Template: ComponentStory<typeof BeginningLayout> = (args) => (
  <BeginningLayout {...args}>
    {Array(100)
      .fill(0)
      .map((_, index) => (
        <p key={index}>컨텐츠...</p>
      ))}
  </BeginningLayout>
);

export const 온보딩_레이아웃 = Template.bind({});
