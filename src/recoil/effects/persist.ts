import { AtomEffect } from 'recoil';

import localStorage from '@/utils/localStorage';

interface PersistRecoilEffectArgs {
  recoilAtomKey: string;
}

const persistRecoilEffect =
  <RecoilState = any>({ recoilAtomKey }: PersistRecoilEffectArgs): AtomEffect<RecoilState> =>
  ({ setSelf, onSet }) => {
    const persistRecoilKey = `persist:recoil@${recoilAtomKey}`;

    const savedValue = localStorage.get(persistRecoilKey);
    if (savedValue) {
      setSelf(savedValue);
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.remove(persistRecoilKey)
        : localStorage.set(persistRecoilKey, newValue);
    });
  };

export default persistRecoilEffect;
