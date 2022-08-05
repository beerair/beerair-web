import { ComponentStory, ComponentMeta } from '@storybook/react';

import { record } from '@/constants/dummy';

import BeerTicket from './BeerTicket';

export default {
  title: 'Components/beer/BeerTicket',
  component: BeerTicket,
} as ComponentMeta<typeof BeerTicket>;

const Template: ComponentStory<typeof BeerTicket> = (args) => <BeerTicket {...args} />;

export const 티켓 = Template.bind({});
티켓.args = {
  record,
};

export const 티켓이랑도장 = Template.bind({});
티켓이랑도장.args = {
  record,
  type: 'stamp',
};

export const 티켓이랑도장2 = Template.bind({});
티켓이랑도장2.args = {
  record: { ...record, feel: 5, recodedAt: new Date(2022, 1, 1) } as any,
  type: 'stamp',
};
