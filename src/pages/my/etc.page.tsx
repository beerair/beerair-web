import styled from '@emotion/styled';
import Link from 'next/link';

import Header, { HEADER_HEIGHT } from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import { ROUTE_PATH } from '@/constants/routes';

const EtcPage = () => {
  return (
    <ListRowContainer>
      <Header leftExtras={<BackButton />}>기타</Header>
      <ListRow>
        <a href="mailto:beerair.official@gmail.com" target="_blank" rel="noreferrer">
          문의하기
        </a>
      </ListRow>
      <ListRow>
        <Link href={ROUTE_PATH.MY.TERMS} passHref>
          <a>서비스 정책 약관</a>
        </Link>
      </ListRow>
      <ListRow>
        <Link href={ROUTE_PATH.MY.PRIVACY_POLICY} passHref>
          <a>개인정보 처리방침</a>
        </Link>
      </ListRow>
    </ListRowContainer>
  );
};

export default EtcPage;

const ListRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${HEADER_HEIGHT}px 20px 0;
`;
const ListRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 58px;
  border-bottom: 1px solid ${({ theme }) => theme.color.whiteOpacity35};

  a {
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.color.white};
    margin-left: 10px;
    cursor: pointer;
  }
`;
