import { isNil } from 'lodash';
import Router from 'next/router';
import { AtomEffect } from 'recoil';

const urlSyncRecoilEffect =
  (name: string, options?: { stringify?: boolean }): AtomEffect<any> =>
  ({ onSet }) => {
    onSet((value) => {
      const url = new URL(window.location.href);
      if (isNil(value)) {
        url.searchParams.delete(name);
      } else {
        url.searchParams.set(name, options?.stringify ? JSON.stringify(value) : value);
      }

      Router.replace(url.href);
    });
  };

export default urlSyncRecoilEffect;
