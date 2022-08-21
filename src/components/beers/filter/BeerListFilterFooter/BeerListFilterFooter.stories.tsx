import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerListFilterFooter from './BeerListFilterFooter';

export default {
  component: BeerListFilterFooter,
} as ComponentMeta<typeof BeerListFilterFooter>;

const Template: ComponentStory<typeof BeerListFilterFooter> = (args) => (
  <BeerListFilterFooter {...args} />
);

export const Default = Template.bind({});
Default.args = {};
