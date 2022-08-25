import { ComponentStory, ComponentMeta, ComponentStoryObj } from '@storybook/react';

import EtcContainer from './EtcContainer';

export default {
  title: 'Pages/마이페이지/기타',
  component: EtcContainer,
  args: {},
} as ComponentMeta<typeof EtcContainer>;

const Template: ComponentStory<typeof EtcContainer> = () => <EtcContainer />;

export const 기타: ComponentStoryObj<typeof EtcContainer> = {};
