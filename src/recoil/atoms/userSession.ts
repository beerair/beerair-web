import { atom } from 'recoil';

import { IMember } from '@/types';

const ATOM_KEY = 'user-session';

const $userSession = atom<IMember | undefined>({
  key: ATOM_KEY,
  default: undefined,
});

export default $userSession;
