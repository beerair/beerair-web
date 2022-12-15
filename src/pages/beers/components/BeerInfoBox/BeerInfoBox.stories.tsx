import { ComponentStory, ComponentMeta } from '@storybook/react';

import BeerInfoBox from './BeerInfoBox';
import { IBeer } from '@/apis';

const BEER: IBeer = {
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

export default {
  title: 'Components/beer/BeerInfoBox',
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
