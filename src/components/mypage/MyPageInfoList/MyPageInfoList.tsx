import styled from '@emotion/styled';

export interface IMyPageInfoListItem {
  count: number;
  unit: string;
  title: string;
}

interface MyPageInfoListProps {
  myPageInfoListItems: IMyPageInfoListItem[];
}

const MyPageInfoList = ({ myPageInfoListItems }: MyPageInfoListProps) => {
  return (
    <StyledMyPageInfoList>
      {myPageInfoListItems.map((item) => (
        <MyPageInfoListItem key={item.title}>
          <NumberAndUnit>
            <Number>{item.count}</Number>
            <Unit>{item.unit}</Unit>
          </NumberAndUnit>
          <Title>{item.title}</Title>
        </MyPageInfoListItem>
      ))}
    </StyledMyPageInfoList>
  );
};

export default MyPageInfoList;

const StyledMyPageInfoList = styled.section`
  display: flex;
  gap: 40px;
  justify-content: center;
`;

const MyPageInfoListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumberAndUnit = styled.div`
  display: flex;
  align-items: baseline;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 10px;
`;

const Number = styled.p`
  ${({ theme }) => theme.fonts.H1};
  color: ${({ theme }) => theme.color.white};
  margin-right: 2px;
`;

const Unit = styled.p`
  ${({ theme }) => theme.fonts.SubTitle4};
  color: ${({ theme }) => theme.color.white};
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.SubTitle5};
  color: ${({ theme }) => theme.color.whiteOpacity90};
`;
