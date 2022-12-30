import { atom } from 'recoil';

export const BEER_LIST_VIEW_ATOM_KEY = 'beer-list-view-type';

export type BeerListViewType = 'grid' | 'list';

const $beerListViewType = atom<BeerListViewType>({
  key: BEER_LIST_VIEW_ATOM_KEY,
  default: 'grid',
});

export default $beerListViewType;
