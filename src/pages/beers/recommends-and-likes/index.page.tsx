import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

import { getBeerLikes, useGetBeerLikes } from '@/apis/beers/getBeerLikes';
import { getBeerRecommends, useGetBeerRecommends } from '@/apis/beers/getBeerRecommends';
import { prefetchWithSSR } from '@/commons/prefetch';
import { queryKeyFactory } from '@/commons/queryKeyFactory';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import Icon from '@/components/Icon';
import Swiper from '@/components/Swiper';
import Tab from '@/components/Tab';

import BeerList from '../components/BeerList';
import BeerListViewToggleButton from '../components/BeerListViewToggleButton';

/**
 * tab="recommend" : 추천 맥주 목록
 * tab="liked" : 반한 맥주 목록
 */
// TODO: (1) query 파라미트 연결 (2) auth 확인 (3) 맥주 찜 목록 무한스크롤
const BeerRecommendAndLikeListPage = () => {
  const [activatedIndex, setActivatedIndex] = useState(0);

  const { data: beersRecommends = [], refetch: refetchBeerRecommends } = useGetBeerRecommends();
  const { data: beerLikes = [], isLoading } = useGetBeerLikes();

  const clickRecommend = () => {
    refetchBeerRecommends();
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <StyledFixedArea>
        <Header leftExtras={<BackButton />} rightExtras={<BeerListViewToggleButton />} />
        <StyledTitle>
          {activatedIndex === 0 ? '새로운 맥주를 도전해볼까요?' : '예전에 찜해둔 맥주들이에요'}
        </StyledTitle>
        <Tab
          tabItems={['안 마셔본 맥주', '반한 맥주']}
          type="secondary"
          activatedIndex={activatedIndex}
          onChange={setActivatedIndex}
        />
      </StyledFixedArea>
      <StyledSwiper currentSlide={activatedIndex} afterChange={setActivatedIndex}>
        <BeerList beers={beersRecommends} />
        <BeerList
          beers={beerLikes}
          isLoading={isLoading}
          // hasNextPage={hasNextPage}
          // fetchNextPage={fetchNextPage}
        />
      </StyledSwiper>
      {activatedIndex === 0 && (
        <BottomFloatingButtonArea>
          <Button
            type="primary"
            width="large"
            leftAddon={<Icon name="Random" size={30} />}
            onClick={clickRecommend}
          >
            다른 맥주 추천 받기
          </Button>
        </BottomFloatingButtonArea>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const resources = [
    { key: queryKeyFactory.GET_BEER_RECOMMENDS(), fetcher: getBeerRecommends },
    { key: queryKeyFactory.GET_BEER_LIKES(), fetcher: getBeerLikes },
  ];

  const { dehydratedState } = await prefetchWithSSR(resources);

  return {
    props: {
      dehydratedState,
    },
  };
};

export default BeerRecommendAndLikeListPage;

const StyledFixedArea = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  padding-bottom: 10px;
  background: ${(p) =>
    `linear-gradient(180deg, ${p.theme.semanticColor.background} 93%, rgba(0, 0, 0, 0) 100%)`};
`;

const StyledTitle = styled.h1`
  padding: 10px 20px;
  ${(p) => p.theme.fonts.H1};
`;

const StyledSwiper = styled(Swiper)`
  flex: 1;
  overflow-y: auto;

  .carousel-slider,
  .slider-wrapper,
  .slider,
  .slide {
    height: 100%;
  }

  .slide {
    overflow-y: auto;
  }
`;
