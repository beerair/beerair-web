import { BeerType, IRecord } from '@/types';

export const beer = {
  id: 1,
  country: {
    id: 1,
    nameKor: '한국',
    nameEng: 'korea',
    imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/samples/korea.png',
    backgroundImageUrl:
      'https://beerair-service.s3.ap-northeast-2.amazonaws.com/samples/korea-bg.png',
    continent: {
      id: 1,
      name: '아시아',
    },
  },
  type: {
    nameEng: BeerType.LIGHT_ALE,
    nameKor: '위트 에일',
    imageUrl: '',
    description: '투명한 황금빛으로 단 맛과 쓴 맛이 어우러진 깔끔한 맛',
  },
  startCountry: {
    nameKor: '한국',
    nameEng: 'korea',
  },
  endCountry: {
    nameKor: '미국',
    nameEng: 'usa',
  },
  nameKor: '제주 위트 에일',
  nameEng: 'Jeju Wit Ale Jeju Wit Ale Jeju Wit Ale Jeju Wit Ale Jeju Wit Ale Jeju Wit Ale',
  imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/samples/kumiho_peach_ale.png',
  content:
    '‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한 끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주 입문자들도 편하게 즐길 수 있다.',
  alcohol: 5.5,
  price: 4200,
  volume: 50,
  feel: 4,
  isLiked: false,
  createdAt: Date.now(),
  updatedAt: Date.now(),
};

export const record: IRecord = {
  id: 20,
  content: '맛이 좋아요(한줄평)',
  feel: 3,
  imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/samples/beer_background.png',
  memberRecordDto: null,
  createdAt: '2022-06-11T02:55:12.151Z',
  updatedAt: '2022-06-11T02:55:12.151Z',
  startCountryKor: 'seoul',
  startCountryEng: '서울',
  endCountryKor: '12',
  endCountryEng: 'Seoul',
  isPublic: true,
  flavorDtos: [
    {
      id: 1,
      content: '탄 맛이나요',
    },
    {
      id: 2,
      content: '목넘김이 부드러워요',
    },
    {
      id: 3,
      content: '쓴 맛이 나요',
    },
  ],
  beerResponseDto: {
    id: 1,
    type: {
      nameEng: 'LIGHT_ALE' as any,
      nameKor: 'test',
      description: 'test',
      imageUrl: 'test',
    },
    startCountry: {
      nameKor: '한국',
      nameEng: 'korea',
    },
    endCountry: {
      nameKor: '미국',
      nameEng: 'usa',
    },
    country: {
      id: 1,
      nameKor: '테스트',
      nameEng: 'test',
      imageUrl: 'test',
      backgroundImageUrl:
        'https://sulsul-media-bucket.s3.ap-northeast-2.amazonaws.com/COUNTRY/background/korea.png',
    },
    nameKor: '평양',
    nameEng: 'peng',
    imageUrl: 'https://www.naver.com',
    content: '1',
    alcohol: 5.5,
    price: 1,
    volume: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    isLiked: true,
  },
  recordCount: 13,
};
