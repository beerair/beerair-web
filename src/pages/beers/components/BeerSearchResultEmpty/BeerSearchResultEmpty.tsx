import styled from '@emotion/styled';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { ROUTE_PATH } from '@/constants/routes';

interface BeerSearchResultEmptyProp {
  query?: string;
}

const BeerSearchResultEmpty = ({ query }: BeerSearchResultEmptyProp) => {
  const title = query
    ? `“${query}”\n맥주를 찾을 수 없어요.`
    : `조건에 맞는\n맥주를 찾을 수 없어요.`;
  const subtitle = query
    ? `잘못된 검색어를 입력하였거나,\n등록되지 않은 맥주예요.`
    : '검색 조건을 변경해보세요.';

  return (
    <StyledWrapper>
      <Icon name="ConveyorBelt" size={224} />
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <Button
        className="request-button"
        type="primary"
        width="large"
        href={ROUTE_PATH.BEERS.SUGGEST}
      >
        맥주 등록 요청하기
      </Button>
    </StyledWrapper>
  );
};

export default BeerSearchResultEmpty;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0 76px;

  & > .request-button {
    margin: 56px 0 0;
  }
`;

const StyledTitle = styled.b`
  ${(p) => p.theme.fonts.H3};
  white-space: pre-line;
  text-align: center;
`;

const StyledSubtitle = styled.b`
  margin-top: 18px;
  ${(p) => p.theme.fonts.Body3};
  white-space: pre-line;
  text-align: center;
`;
