import styled from '@emotion/styled';
import type { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import Slider from 'react-slick';
import { useRecoilValue } from 'recoil';

import { getTest, useGetTest } from '@/apis/test/getTest';
import { prefetchWithSSR } from '@/commons/prefetch';
import { queryKeyFactory } from '@/commons/queryKeyFactory';
import BottomNavigation from '@/components/BottomNavigation';
import { BOTTOM_NAVIGATION_HEIGHT } from '@/components/BottomNavigation/BottomNavigation';
import Button from '@/components/Button';
import Icon, { IconNameType } from '@/components/Icon';
import LoginRequestModal from '@/components/LoginRequestModal';
import { $userSession } from '@/recoil/atoms';

// TODO: test api 호출 제거
const HomePage: NextPage = () => {
  const { data } = useGetTest();

  const user = useRecoilValue($userSession);
  const myRecords = [] as any;

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
          {myRecords?.length > 0 ? (
            <Slider
              arrows={false}
              infinite={false}
              slidesToShow={1}
              slidesToScroll={1}
              variableWidth
              swipeToSlide
              className="home-record-slider"
            >
              {myRecords.map((record: any) => (
                <div key={record.id} className="home-record-item">
                  {/* TODO: HomeBeerTicket 추가 */}
                  {/* {record && <HomeBeerTicket record={record} type="stamp" className="beer-ticket" />} */}
                </div>
              ))}
            </Slider>
          ) : (
            <img
              src="images/no-record-ticket.png"
              width={250}
              height="auto"
              alt="기록된 티켓 없음"
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
    margin: auto;

    & > .beer-recommend-button {
      margin-top: 28px;
    }
  }

  & .home-record-slider {
    padding-left: calc(50vw - 140px);
    overflow: hidden;

    & .slick-list {
      overflow: visible;
    }

    @media (min-width: 768px) {
      padding-left: 244px;
    }
  }

  & .home-record-item {
    padding: 0 15px;
  }
`;
