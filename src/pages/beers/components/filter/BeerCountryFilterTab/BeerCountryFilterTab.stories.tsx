import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerCountryFilterTab from './BeerCountryFilterTab';

export default {
  component: BeerCountryFilterTab,
} as ComponentMeta<typeof BeerCountryFilterTab>;

const Template: ComponentStory<typeof BeerCountryFilterTab> = (args) => <BeerCountryFilterTab />;

export const Default = Template.bind({});
