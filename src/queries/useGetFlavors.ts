import { useQuery } from 'react-query';

import { getFlavors, IBeer, IFlavor } from '@/apis';

export const useGetFlavors = (beerId: IBeer['id'], limit: number, initialData?: IFlavor[]) => {
  const result = useQuery(['flavors', beerId], () => getFlavors(beerId, limit), {
    cacheTime: Infinity,
    initialData,
  });

  return result;
};
