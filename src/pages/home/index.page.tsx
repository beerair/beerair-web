import styled from '@emotion/styled';
import classNames from 'classnames';
import type { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { getTest, useGetTest } from '@/apis/test/getTest';
import { prefetchWithSSR } from '@/commons/prefetch';
import { queryKeyFactory } from '@/commons/queryKeyFactory';
import BottomNavigation from '@/components/BottomNavigation';
import { BOTTOM_NAVIGATION_HEIGHT } from '@/components/BottomNavigation/BottomNavigation';
import Button from '@/components/Button';
import Icon, { IconNameType } from '@/components/Icon';
import LoginRequestModal from '@/components/LoginRequestModal';
import { reviewList } from '@/constants/dummy';
import { $userSession } from '@/recoil/atoms';
import { IReview } from '@/types';

import HomeBeerTicketSlider from './components/HomeBeerTicketSlider';

// TODO: test api 호출 제거
const HomePage: NextPage = () => {
  const { data } = useGetTest();

  const user = useRecoilValue($userSession);
  const myReviews: IReview[] = reviewList;

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
          {!user || !myReviews?.length ? (
            <img
              className="no-review-ticket"
              src="images/no-review-ticket.png"
              width={300}
              height="auto"
              alt="기록된 티켓 없음"
            />
          ) : (
            <HomeBeerTicketSlider
              className={classNames({ 'beer-ticket-slider--single': myReviews.length === 1 })}
              reviews={myReviews}
            />
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

    & .beer-ticket-slider--single {
      width: fit-content;
      margin: 0 auto;
    }

    & > .beer-recommend-button {
      margin: 28px auto 0;
    }
  }
`;
