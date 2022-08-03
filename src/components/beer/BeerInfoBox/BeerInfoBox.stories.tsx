import { BeerType, IBeer } from '@/types';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerInfoBox from './BeerInfoBox';

const BEER: IBeer = {
  id: 1,
  country: {
    id: 1,
    nameKor: '한국',
    nameEng: 'korea',
    imageUrl: 'https://sulsul-media-bucket.s3.ap-northeast-2.amazonaws.com/COUNTRY/korea.png',
    backgroundImageUrl:
      'https://sulsul-media-bucket.s3.ap-northeast-2.amazonaws.com/COUNTRY/background/korea.png',
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
  nameEng: 'Jeju Wit Ale',
  imageUrl:
    'https://www.beveragenews.co.kr/files/attach/images/1230/134/005/1c94f3b85e4f31a82688cb0cfb910aad.jpg',
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

export default {
  title: 'Components/beer-detail/BeerInfoBox',
  component: BeerInfoBox,
  args: { beerData: BEER },
} as ComponentMeta<typeof BeerInfoBox>;

const Template: ComponentStory<typeof BeerInfoBox> = (args) => <BeerInfoBox {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <Story />
    </div>
  ),
];
