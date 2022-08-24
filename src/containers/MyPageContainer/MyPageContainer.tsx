import styled from '@emotion/styled';
import { NextPage } from 'next';

import BottomNavigation from '@/components/BottomNavigation';
import Bio from '@/components/mypage/Bio';
import MyPageInfoList from '@/components/mypage/MyPageInfoList';
import MyPageBoxButtonList from '@/components/mypage/MyPageBoxButtonList';
import Spacing from '@/components/commons/Spacing';
import { level, MYPAGE_BOX_BUTTON_LIST_DATA, MYPAGE_INFO_LIST_DATA } from '@/constants/dummy';

interface MyPageContainerProps {}

const MyPageContainer: NextPage<MyPageContainerProps> = () => {
  return (
    <>
      <StyledMyPageContainer>
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
      </StyledMyPageContainer>
      <BottomNavigation />
    </>
  );
};

export default MyPageContainer;

const StyledMyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
`;