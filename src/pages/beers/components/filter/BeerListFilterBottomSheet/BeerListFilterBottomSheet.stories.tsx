import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerListFilterBottomSheet from './BeerListFilterBottomSheet';

export default {
  component: BeerListFilterBottomSheet,
  argTypes: {
    open: { control: 'boolean', defaultValue: true },
  },
} as ComponentMeta<typeof BeerListFilterBottomSheet>;

const Template: ComponentStory<typeof BeerListFilterBottomSheet> = (args) => {
  return <BeerListFilterBottomSheet {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
