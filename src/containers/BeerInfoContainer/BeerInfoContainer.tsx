import 'react-toastify/dist/ReactToastify.css';

import { BackButton, ShareButton } from '@/components/commons/Header/extras';
import { beer, flavorList, reviews } from '@/constants/dummy';

import AirPort from '@/components/record/AirPort';
import BeerInfoBox from '@/components/beer/BeerInfoBox';
import BottomFloatingButtonArea from '@/components/record/BottomFloatingButtonArea';
import Button from '@/components/commons/Button';
import FlavorList from '@/components/record/FlavorList';
import Header from '@/components/commons/Header';
import Icon from '@/components/commons/Icon';
import LikeBeerToggleButton from '@/components/beer/LikeBeerToggleButton';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import ReviewList from '@/components/record/ReviewList';
import { ToastContainer } from 'react-toastify';
import { share } from '@/utils/share';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useScroll } from '@/hooks/commons';

interface BeerInfoContainerProps {}

const BeerInfoContainer: NextPage<BeerInfoContainerProps> = (
  {
    /** @todo api 연동 인터페이스 및 로직 작성 */
  },
) => {
  const { scroll, isTransparent } = useScroll();

  const router = useRouter();
  const beerId = Number(router.query.id);

  const { country, nameKor, startCountry, endCountry, content, isLiked } = beer;

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
                    text: `‘${nameKor}’ 이 맥주가 궁금하신가요? 지금 바로 비어에어에서 확인해 보세요!`,
                    url: window.location.href,
                  })
                }
              />
              <LikeBeerToggleButton isLiked={isLiked} id={beerId} />
            </>
          }
          isTransparent={isTransparent}
        >
          {nameKor}
        </Header>
        <ToastContainer />
        <BackgroundImage scroll={scroll}>
          <img src={country?.backgroundImageUrl} alt={country?.nameKor} />
        </BackgroundImage>
        <section className="container">
          <BeerInfoBox beerData={beer} />
          <AirPort startCountry={startCountry} endCountry={endCountry} />
          <BeerContent>{content}</BeerContent>
          <FlavorList flavors={flavorList} />
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
              onClick={() => router.push(`/record/create/${beerId}`)}
            >
              기록하기
            </Button>
          }
        />
      </StyledBeerInfoPage>
    </>
  );
};

export default BeerInfoContainer;

const StyledBeerInfoPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 0;

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
