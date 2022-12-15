import { ICountry } from '@/types-old'; // TODO 예전 api type 수정

/** @todo api 연동 */
export const useGetCountries = (continentId?: number): { countries: ICountry[] } => {
  return {
    countries: [
      {
        id: 1,
        nameKor: '독일',
        nameEng: '',
        imageUrl: '',
        backgroundImageUrl: '',
      },
      {
        id: 2,
        nameKor: '프랑스',
        nameEng: '',
        imageUrl: '',
        backgroundImageUrl: '',
      },
      {
        id: 3,
        nameKor: '대한민국',
        nameEng: '',
        imageUrl: '',
        backgroundImageUrl: '',
      },
      {
        id: 4,
        nameKor: '영국',
        nameEng: '',
        imageUrl: '',
        backgroundImageUrl: '',
      },
      {
        id: 5,
        nameKor: '벨기에',
        nameEng: '',
        imageUrl: '',
        backgroundImageUrl: '',
      },
    ],
  };
};
