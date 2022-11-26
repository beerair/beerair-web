import { BEER_TYPE, ILevel, IRecord, IRequestBeer, REQUEST_BEER_STATUS } from '@/types';

import { IMyPageInfoListItem } from '@/components/mypage/MyPageInfoList';
import { MyPageBoxButtonListItemProps } from '@/components/mypage/MyPageBoxButtonListItem';
import { IBeer, ICountry, IFlavor, IReview } from '@/apis';

export const beer: IBeer = {
  id: 1,
  country: {
    id: 1,
    korName: '대한민국',
    engName: 'korea',
    backgroundImageUrl:
      'https://beerair-service.s3.ap-northeast-2.amazonaws.com/COUNTRY/background/korea.png',
    imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/COUNTRY/korea.png',
  },
  type: {
    id: 3,
    korName: 'IPA',
    engName: 'IPA',
    content: '탄산이 비교적 약하고 강렬한 홉향과 강하고 텁텁한 쓴 맛이 나는 맥주',
    imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/BEER/TYPE/ipa.png',
  },
  myReview: null,
  korName: '빅슬라이스 IPA',
  engName: 'Big Slice Ipa',
  imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/BEER/big_slice_ipa.png',
  content: '열대 과일향과 몰트의 고소함',
  alcohol: 5.4,
  price: 3500,
  volume: 500,
  liked: false,
};

export const requestBeer: IRequestBeer = {
  beerId: 1,
  beerImageUrls: [],
  beerName: '하이네켄 벚꽃 맥주',
  createdAt: '2022-06-21T02:55:12.151Z',
  requestCompletedAt: '2022-06-21T02:55:12.151Z',
  status: REQUEST_BEER_STATUS.APPROVED,
};

export const level: ILevel = {
  id: 1,
  tier: 1,
  imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
  req: 5,
};

export const levels: ILevel[] = [
  {
    id: 1,
    tier: 1,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 0,
  },
  {
    id: 2,
    tier: 2,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 1,
  },
  {
    id: 3,
    tier: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 5,
  },
  {
    id: 4,
    tier: 4,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 12,
  },
  {
    id: 5,
    tier: 5,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/04/24/14/19/paper-1349664_1280.png',
    req: 20,
  },
];

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

export const MYPAGE_BOX_BUTTON_LIST_DATA: MyPageBoxButtonListItemProps[] = [
  {
    iconName: 'Heart',
    text: '내가 반한 맥주',
    count: 3,
    unit: '개',
    href: '/beer/recommend-and-liked?tab="liked"',
  },
  {
    iconName: 'PlusCircle',
    text: '요청한 맥주 현황',
    count: 3,
    unit: '개',
    href: '/beer/requests',
  },
  {
    iconName: 'ThreeDot',
    text: '기타',
    href: '/my/etc',
  },
];

export const MYPAGE_INFO_LIST_DATA: IMyPageInfoListItem[] = [
  { count: 1, unit: '캔', title: '마신 맥주' },
  { count: 2, unit: '개', title: '기록한 티켓' },
  { count: 3, unit: '개국', title: '여행한 나라' },
];

export const flavorList: IFlavor[] = [
  {
    id: 1,
    content: '단 맛이나요',
    count: 1,
  },
  {
    id: 2,
    content: '목넘김이 부드러워요',
    count: 1,
  },
  {
    id: 3,
    content: '쓴 맛이 나요',
    count: 1,
  },
];

export const country: ICountry = {
  id: 1,
  korName: '대한민국',
  engName: 'korea',
  backgroundImageUrl:
    'https://beerair-service.s3.ap-northeast-2.amazonaws.com/COUNTRY/background/korea.png',
  imageUrl: 'https://beerair-service.s3.ap-northeast-2.amazonaws.com/COUNTRY/korea.png',
};

export const review: IReview = {
  id: 'c3a3251a56bb4440ab04b0b0f64a196f',
  content: '리뷰리뷰',
  feelStatus: 'GOOD',
  imageUrl: '',
  createdAt: '2022-09-17T12:42:30',
  member: {
    id: '9a7cc50525eb4df286e0096b96874c38',
    email: null,
    profileUrl: null,
    nickname: '재원잉',
    authorities: null,
    tier: null,
    levelImage: null,
  },
  beer: beer,
  departuresCountry: country,
  arrivalCountry: country,
  flavors: flavorList,
};

export const reviewList: IReview[] = [
  {
    id: 'c3a3251a56bb4440ab04b0b0f64a196f',
    content: '리뷰리뷰',
    feelStatus: 'GOOD',
    imageUrl: '',
    createdAt: '2022-09-17T12:42:30',
    member: {
      id: '9a7cc50525eb4df286e0096b96874c38',
      email: null,
      profileUrl: null,
      nickname: '재원잉',
      authorities: null,
      tier: null,
      levelImage: null,
    },
    beer: beer,
    departuresCountry: country,
    arrivalCountry: country,
    flavors: flavorList,
  },
  {
    id: 'ea8bb35a04c2423a95ac11e46531fb73',
    content: 'string',
    feelStatus: 'BAD',
    imageUrl: '',
    createdAt: '2022-09-09T17:48:16',
    member: {
      id: '9a7cc50525eb4df286e0096b96874c38',
      email: null,
      profileUrl: null,
      nickname: '재원잉',
      authorities: null,
      tier: null,
      levelImage: null,
    },
    beer: beer,
    departuresCountry: country,
    arrivalCountry: country,
    flavors: flavorList,
  },
];
