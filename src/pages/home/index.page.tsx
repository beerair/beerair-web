import styled from '@emotion/styled';
import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import Slider from 'react-slick';
import { useRecoilValue } from 'recoil';

import { getTest, useGetTest } from '@/apis/test/getTest';
import { prefetchWithSSR } from '@/commons/prefetch';
import { queryKeyFactory } from '@/commons/queryKeyFactory';
import BeerTicket from '@/components/BeerTicket/BeerTicket';
import BottomNavigation from '@/components/BottomNavigation';
import { BOTTOM_NAVIGATION_HEIGHT } from '@/components/BottomNavigation/BottomNavigation';
import Button from '@/components/Button';
import Icon, { IconNameType } from '@/components/Icon';
import LoginRequestModal from '@/components/LoginRequestModal';
import { review } from '@/constants/dummy';
import { $userSession } from '@/recoil/atoms';
import { IReview } from '@/types';

// TODO: test api 호출 제거
const HomePage: NextPage = () => {
  const { data } = useGetTest();

  const user = useRecoilValue($userSession);
  const myReviews: IReview[] = [
    review,
    // { ...review, feelStatus: 1, createdAt: new Date(2022, 1, 1).toISOString() },
    // { ...review, feelStatus: 2, createdAt: new Date(2022, 1, 1).toISOString() },
    // { ...review, feelStatus: 3, createdAt: new Date(2022, 1, 1).toISOString() },
  ];

  const [isLoginRequestModalOpen, setIsLoginRequestModalOpen] = useState(false);

  const openModal = () => {
    setIsLoginRequestModalOpen(true);
  };

  const closeModal = () => {
    setIsLoginRequestModalOpen(false);
  };

  return (
    <>
      <StyledHomeContainer>
        <header>
          <Icon name="Logo" width="80px" />
        </header>
        <div className="home-welcome-wrapper">
          <Icon name={`Level${user?.tier || 1}` as IconNameType} size={64} />
          <span className="home-welcome-message">
            {user
              ? `${user.nickname}님,\n이번 맥주 여행은 어떠셨나요?`
              : `로그인하고 비어에어를\n이용해보세요`}
          </span>
        </div>
        <div className="home-contents">
          {!user || myReviews?.length === 0 ? (
            <img
              className="no-review-ticket"
              src="images/no-review-ticket.png"
              width={300}
              height="auto"
              alt="기록된 티켓 없음"
            />
          ) : myReviews.length === 1 ? (
            <div className="home-review-item--single">
              <Link href={`/review/ticket/${myReviews[0].id}`} passHref>
                <a>
                  <BeerTicket review={myReviews[0]} type="stamp" className="beer-ticket" />
                </a>
              </Link>
            </div>
          ) : (
            <Slider
              arrows={false}
              infinite={false}
              slidesToShow={1}
              slidesToScroll={1}
              variableWidth
              swipeToSlide
              centerMode
              centerPadding="0"
              className="home-review-slider"
            >
              {myReviews.map((review: IReview) => (
                <div key={review.id} className="home-review-item">
                  <Link href={`/review/ticket/${review.id}`} passHref>
                    <a>
                      <BeerTicket review={review} type="stamp" className="beer-ticket" />
                    </a>
                  </Link>
                </div>
              ))}
            </Slider>
          )}
          <Button
            className="beer-recommend-button"
            type="secondary"
            line
            rightAddon={<Icon name="Airplane" color="yellow" />}
            iconMargin={14}
            width="large"
            {...(user ? { href: '/beer/recommend-and-liked' } : { onClick: openModal })}
          >
            {'이런 맥주는 어떠세요?'}
          </Button>
        </div>
        <BottomNavigation />
      </StyledHomeContainer>
      <LoginRequestModal
        isOpen={isLoginRequestModalOpen}
        onClose={closeModal}
        disabledDimClick
        withCloseButton
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const resources = [{ key: queryKeyFactory.FETCH_TEST(), fetcher: getTest }];

  const { dehydratedState } = await prefetchWithSSR(resources);

  return {
    props: {
      dehydratedState,
    },
  };
};

export default HomePage;

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 50px 0 ${BOTTOM_NAVIGATION_HEIGHT + 24}px;

  & > header {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 768px;
    height: 50px;
    background-color: ${(p) => p.theme.color.black100};
    z-index: 1;
  }

  & > .home-welcome-wrapper {
    display: flex;
    align-items: center;
    padding: 21px 27px;
    word-break: keep-all;

    & > .home-welcome-message {
      ${({ theme }) => theme.fonts.H7};
      margin-left: 16px;

      @media (min-width: 380px) {
        white-space: pre-wrap;
      }
    }
  }

  & > .home-contents {
    width: 100%;
    margin: auto 0;

    & > .no-review-ticket {
      margin: 0 auto;
    }

    & .home-review-item--single {
      width: fit-content;
      margin: 0 auto;
    }

    & > .beer-recommend-button {
      margin: 28px auto 0;
    }
  }

  & .home-review-item {
    padding: 0 15px;
  }
`;
