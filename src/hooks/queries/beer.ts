import { BEER_TYPE } from '@/types';

/** @todo api 연동 */
export const useGetBeerTypes = () => {
  return {
    beerTypes: [
      {
        nameEng: BEER_TYPE.LIGHT_ALE,
        nameKor: '에일',
        description: '투명한 황금빛으로 단 맛과 쓴 맛이 어우러진 깔끔한 맛',
        imageUrl: '',
      },
      {
        nameEng: BEER_TYPE.PILSNER,
        nameKor: '필스너',
        description: '투명한 황금빛으로 단 맛과 쓴 맛이 어우러진 깔끔한 맛',
        imageUrl: '',
      },
    ],
  };
};
