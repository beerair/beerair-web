import styled from '@emotion/styled';

const BACKGROUND_COLOR = '#FEE500';
const TEXT_COLOR = '#191919';

/** @todo api 연동 */
const KakaoLoginButton = () => {
  return (
    <StyledButton>
      <img src="/images/kakao.png" alt="" />
      <p>카카오로 시작하기</p>
    </StyledButton>
  );
};

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 47px;
  padding: 0 14px;
  border-radius: 6px;

  background-color: ${BACKGROUND_COLOR};
  color: ${TEXT_COLOR};

  &:active {
    filter: brightness(80%);
  }

  > img {
    width: 18px;
    height: 18px;
  }

  > p {
    flex: 1;
    font-size: 15px;
    text-align: center;
  }
`;

export default KakaoLoginButton;
