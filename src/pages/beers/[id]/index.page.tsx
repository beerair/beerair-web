import styled from '@emotion/styled';
import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import Button from '@/components/Button';
import Header, { HEADER_HEIGHT } from '@/components/Header';
import { BackButton, ShareButton } from '@/components/Header/extras';
import Icon from '@/components/Icon';
import { useScroll } from '@/hooks';
import BeerInfoBox from '@/pages/beers/components/BeerInfoBox';
import { IBeer, IFlavor, IReview } from '@/types';
import { share } from '@/utils/share';

import { getBeer, useGetBeer } from '../../../apis/beers/getBeer';
import { getFlavors, useGetFlavors } from '../../../apis/flavors/getFlavors';
import { getReviewsByBeer, useGetReviewsByBeer } from '../../../apis/review/getReviewsByBeer';
import LikeBeerToggleButton from '../components/LikeBeerToggleButton';

import AirPort from './components/AirPort';
import FlavorList from './components/FlavorList';
import ReviewList from './components/ReviewList';

const FLAVORS_LIMIT = 3;

interface BeerInfoPageProps {
  //beerResponse: IBeer;
  flavorsResponse: IFlavor[];
  reviewsResponse: IReview[];
}

const BeerInfoPage: NextPage<BeerInfoPageProps> = ({
  //beerResponse: initialBeerResponse,
  flavorsResponse: initialFlavorsResponse,
  reviewsResponse: initialReviewsByBeerResponse,
}) => {
  const { scroll, isTransparent } = useScroll();

  const router = useRouter();
  const beerId = Number(router.query.id);

  const { data: beer } = useGetBeer(beerId);
  const { data: flavors } = useGetFlavors(beerId, FLAVORS_LIMIT, initialFlavorsResponse);
  const { data: reviews } = useGetReviewsByBeer(beerId, initialReviewsByBeerResponse);

  if (!beer || !flavors) {
    return null;
  }

  const { country, korName, content, liked } = beer;

  return (
    <>
      <NextSeo
        openGraph={{
          title: '[비어에어] 같이 떠나요!',
          description: '비어에어와 함께 세계 맥주를 정복해 보세요!',
          images: [{ url: 'images/beerair_og.png', width: 1200, height: 600, alt: '비어에어' }],
        }}
      />
      <StyledBeerInfoPage>
        <Header
          leftExtras={<BackButton />}
          rightExtras={
            <>
              <ShareButton
                onClick={() =>
                  share({
                    title: `[비어에어] 같이 떠나요!`,
                    text: `‘${korName}’ 이 맥주가 궁금하신가요? 지금 바로 비어에어에서 확인해 보세요!`,
                    url: window.location.href,
                  })
                }
              />
              <LikeBeerToggleButton liked={liked} id={beerId} />
            </>
          }
          isTransparent={isTransparent}
        >
          {korName}
        </Header>
        <ToastContainer />
        <BackgroundImage scroll={scroll}>
          <img src={country?.backgroundImageUrl} alt={country?.korName} />
        </BackgroundImage>
        <section className="container">
          <BeerInfoBox beerData={beer} />
          {/*<AirPort startCountry={startCountry} endCountry={endCountry} />*/}
          <BeerContent>{content}</BeerContent>
          <FlavorList flavors={flavors} />
        </section>
        {!!reviews?.length && (
          <>
            <HorizontalDivider />
            <section className="container">
              <ReviewList reviews={reviews} lastItemRef={null} />
            </section>
          </>
        )}
        <BottomFloatingButtonArea
          button={
            <Button
              type="primary"
              width="large"
              rightAddon={<Icon name="FlightTakeOff" />}
              // TODO: ROUTE_PATH 상수로 수정
              onClick={() => router.push(`/reviews/create/${beerId}`)}
            >
              기록하기
            </Button>
          }
        />
      </StyledBeerInfoPage>
    </>
  );
};

export default BeerInfoPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.id && typeof context.query.id === 'string' && Number(context.query.id)) {
    const { id } = context.query;

    const beerResponse = await getBeer(Number(id));
    const flavorsResponse = await getFlavors(Number(id), FLAVORS_LIMIT);
    const reviewsResponse = await getReviewsByBeer(Number(id));

    return { props: { beerResponse, flavorsResponse, reviewsResponse } };
  }

  return { props: {} };
};

const StyledBeerInfoPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 0;
  padding-top: ${HEADER_HEIGHT}px;

  & > .container {
    padding: 0 20px;
  }
`;

const BackgroundImage = styled.div<{ scroll: boolean }>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 768px;
  margin: 0 auto;
  width: 100%;
  z-index: -1;

  & > img {
    width: 100%;
    height: 237px;
    opacity: ${({ scroll }) => (scroll ? 0 : 1)};
    object-fit: cover;
    transition: opacity 0.5s;
  }
`;

const BeerContent = styled.p`
  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.color.grey1};
  text-align: center;
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.color.whiteOpacity10};
`;
