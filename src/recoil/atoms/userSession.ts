import { IUser } from '@/types-old/user';
import { atom } from 'recoil';

const ATOM_KEY = 'user-session';

const $userSession = atom<IUser | undefined>({
  key: ATOM_KEY,
  default: undefined,
});

export default $userSession;
