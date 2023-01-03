import styled from '@emotion/styled';

import { BASE_URL } from '@/commons/axios';
import Icon from '@/components/Icon';

const BACKGROUND_COLOR = '#03C75A';
const TEXT_COLOR = '#FFFFFF';

/** @todo api 연동 */
const NaverLoginButton = () => {
  return (
    <StyledButton href={`${BASE_URL}/oauth2/authorization/naver`}>
      <Icon name="Naver" color="white" size={18} />
      <p>네이버로 시작하기</p>
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

  > p {
    flex: 1;
    font-size: 15px;
    text-align: center;
  }
`;

export default NaverLoginButton;
