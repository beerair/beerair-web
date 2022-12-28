import { ComponentStory, ComponentMeta } from '@storybook/react';

import { review } from '@/constants/dummy';

import BeerTicket from './BeerTicket';

export default {
  component: BeerTicket,
} as ComponentMeta<typeof BeerTicket>;

const Template: ComponentStory<typeof BeerTicket> = (args) => <BeerTicket {...args} />;

export const 티켓 = Template.bind({});
티켓.args = {
  review,
};

export const 티켓이랑도장 = Template.bind({});
티켓이랑도장.args = {
  review,
  type: 'stamp',
};

export const 티켓이랑도장2 = Template.bind({});
티켓이랑도장2.args = {
  review: { ...review, feelStatus: 1, createdAt: new Date(2022, 1, 1).toISOString() },
  type: 'stamp',
};
