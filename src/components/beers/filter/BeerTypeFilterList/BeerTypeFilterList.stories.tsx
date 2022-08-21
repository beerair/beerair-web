import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerTypeFilterList from './BeerTypeFilterList';

export default {
  component: BeerTypeFilterList,
} as ComponentMeta<typeof BeerTypeFilterList>;

const Template: ComponentStory<typeof BeerTypeFilterList> = () => <BeerTypeFilterList />;

export const Default = Template.bind({});
