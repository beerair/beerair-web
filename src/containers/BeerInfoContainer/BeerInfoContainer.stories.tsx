import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerInfoContainer from './BeerInfoContainer';

export default {
  title: 'Pages/맥주정보',
  component: BeerInfoContainer,
} as ComponentMeta<typeof BeerInfoContainer>;

const Template: ComponentStory<typeof BeerInfoContainer> = (args) => (
  <BeerInfoContainer {...args} />
);

export const 맥주_정보 = Template.bind({});

맥주_정보.story = {
  parameters: {
    nextRouter: {
      path: '/beers/[id]',
      asPath: '/beers/1',
      query: {
        id: '1',
      },
    },
  },
};
