import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { ROUTE_PATH } from '@/constants/routes';

const BeerRequestCompletePage = () => {
  const router = useRouter();

  const goToHome = () => router.push(ROUTE_PATH.HOME);

  return (
    <StyledWrapper>
      <Icon name="Film" size={244} />
      <b>요청 완료되었습니다</b>
      <p>{'조금만 기다려주세요!\n관리자 승인 후 14일 이내 등록됩니다.'}</p>
      <Button type="primary" width="large" onClick={goToHome}>
        홈으로 돌아가기
      </Button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10vh 0;

  > b {
    margin: 34px 0 0;
    ${(p) => p.theme.fonts.H3};
  }

  > p {
    margin: 26px 0 auto;
    white-space: pre-line;
    ${(p) => p.theme.fonts.Body3};
    text-align: center;
  }

  > button {
    margin: 16px 0 0;
  }
`;

export default BeerRequestCompletePage;
