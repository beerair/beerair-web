import { useQuery } from 'react-query';

import { getReviewsByBeer, IBeer, IReview } from '@/apis';

// @todo: 페이지네이션 구현

export const useGetReviewsByBeer = (beerId: IBeer['id'], initialData?: IReview[]) => {
  const result = useQuery(['reviews', beerId], () => getReviewsByBeer(beerId), {
    cacheTime: Infinity,
    initialData,
  });

  return result;
};
