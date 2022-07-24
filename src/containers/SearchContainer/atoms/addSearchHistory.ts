import { atom } from 'recoil';

const ATOM_KEY = 'add-search-histories';

const $addSearchHistory = atom<((searchText: string) => void) | null>({
  key: ATOM_KEY,
  default: null,
});

export default $addSearchHistory;
