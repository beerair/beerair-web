import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextSeo } from 'next-seo';

import BeerInfoBox from '@/components/beer/BeerInfoBox';
import AirPort from '@/components/record/AirPort';
import FlavorList from '@/components/record/FlavorList';
import Button from '@/components/commons/Button';
import Icon from '@/components/commons/Icon';
import ReviewList from '@/components/record/ReviewList';
import Header from '@/components/commons/Header';
import BottomFloatingButtonArea from '@/components/record/BottomFloatingButtonArea';
import { ShareButton, LikeBeerToggleButton, BackButton } from '@/components/commons/Header/extras';
import { share } from '@/utils/share';
import { beer, flavorList, reviews } from '@/constants/dummy';

interface BeerInfoContainerProps {}

const BeerInfoContainer: NextPage<BeerInfoContainerProps> = ({}) => {
  useEffect(() => {
    const scrollEventListener = () => {
      const scrollY = window.scrollY ?? window.pageYOffset;

      if (scrollY > 30) {
        setIsscrolled(true);
        setIsTransparent(false);
      } else if (scrollY < 30) {
        setIsscrolled(false);
        setIsTransparent(true);
      }
    };
    window.addEventListener('scroll', scrollEventListener, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollEventListener);
    };
  }, []);

  const [isscrolled, setIsscrolled] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

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
          leftExtras={<StyledBackButton isscrolled={isscrolled} />}
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
        <BackgroundImage isscrolled={isscrolled}>
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
              <ReviewList reviews={reviews} />
            </section>
          </>
        )}
        <BottomFloatingButtonArea
          button={
            <Link href={`/record/create/${beerId}`} passHref>
              <Button type="primary" width="large" rightAddon={<Icon name="FlightTakeOff" />}>
                기록하기
              </Button>
            </Link>
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

const BackgroundImage = styled.div<{ isscrolled: boolean }>`
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
    opacity: ${({ isscrolled }) => (isscrolled ? 0 : 1)};
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

const StyledBackButton = styled(BackButton)<{ isscrolled: boolean }>`
  svg {
    fill: ${(p) => (p.isscrolled ? p.theme.color.white : p.theme.color.whiteOpacity50)};
  }
`;
