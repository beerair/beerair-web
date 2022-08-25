import { $beerListViewType } from '@/recoil/atoms';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useRecoilState, useRecoilValue } from 'recoil';

import BeerListViewToggleButton from './BeerListViewToggleButton';

export default {
  component: BeerListViewToggleButton,
} as ComponentMeta<typeof BeerListViewToggleButton>;

const Template: ComponentStory<typeof BeerListViewToggleButton> = (args) => {
  const beerListViewType = useRecoilValue($beerListViewType);
  return (
    <>
      <BeerListViewToggleButton />
      <p>beerListViewType: {beerListViewType}</p>
    </>
  );
};

export const Default = Template.bind({});
