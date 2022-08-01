import { ComponentStory, ComponentMeta } from '@storybook/react';

import { beer } from '@/constants/dummy';

// import backgroundImage from '../../../.storybook/assets/beer_background.png';
import BeerPhotoLabel from './BeerPhotoLabel';

export default {
  title: 'Components/beer/BeerPhotoLabel',
  component: BeerPhotoLabel,
  argTypes: {
    beer: { control: 'readonly' },
    background: { control: 'readonly' },
  },
} as ComponentMeta<typeof BeerPhotoLabel>;

const Template: ComponentStory<typeof BeerPhotoLabel> = (args) => <BeerPhotoLabel {...args} />;

export const BasicBeerPhotoLabel = Template.bind({});
BasicBeerPhotoLabel.args = {
  beer,
};

export const BackgroundBeerTicketTitle = Template.bind({});
BackgroundBeerTicketTitle.args = {
  beer,
  background: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/samples/beer_background.png',
};
