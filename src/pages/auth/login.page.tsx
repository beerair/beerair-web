import styled from '@emotion/styled';

import BeginningLayout from '@/components/layouts/BeginningLayout';
import KakaoLoginButton from './components/KakaoLoginButton';
import NaverLoginButton from './components/NaverLoginButton';

const LoginPage: React.FC = () => {
  return (
    <BeginningLayout
      title={`계정을 등록하면\n맥주에 대한 평가를\n기록하고 공유할 수 있습니다!`}
      cloudColor="whiteOpacity35"
    >
      <StyledWrapper>
        <p className="subtitle">간편 로그인</p>
        <KakaoLoginButton />
        <NaverLoginButton />
      </StyledWrapper>
    </BeginningLayout>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 100%;
  padding: 0 38px 40%;

  .subtitle {
    ${(p) => p.theme.fonts.Body4};
    color: ${(p) => p.theme.color.whiteOpacity65};
    margin: 0 0 10px;
    text-align: center;
  }

  > * {
    margin-top: 10px;
  }
`;

export default LoginPage;
