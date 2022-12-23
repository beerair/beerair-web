import styled from '@emotion/styled';
import { NextPage } from 'next';

import BottomNavigation from '@/components/BottomNavigation';
import Spacing from '@/components/Spacing';
import { level, MYPAGE_BOX_BUTTON_LIST_DATA, MYPAGE_INFO_LIST_DATA } from '@/constants/dummy';

import Bio from './components/Bio';
import MyPageBoxButtonList from './components/MyPageBoxButtonList';
import MyPageInfoList from './components/MyPageInfoList';

interface MyPagePageProps {}

const MyPagePage: NextPage<MyPagePageProps> = () => {
  return (
    <>
      <StyledMyPagePage>
        <Spacing size={60} />
        <Bio
          remainRecordCount={0}
          userLevel={level}
          nickname="비어에어"
          email="beerair.official@gmail.com"
        />
        <Spacing size={36} />
        <MyPageInfoList myPageInfoListItems={MYPAGE_INFO_LIST_DATA} />
        <Spacing size={50} />
        <MyPageBoxButtonList myPageBoxButtonListItems={MYPAGE_BOX_BUTTON_LIST_DATA} />
      </StyledMyPagePage>
      <BottomNavigation />
    </>
  );
};

export default MyPagePage;

const StyledMyPagePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
`;
