import styled from '@emotion/styled';
import MyPageBoxButtonListItem, { IMyPageBoxButtonListItem } from '../MyPageBoxButtonListItem';

interface MyPageBoxButtonListProps {
  myPageBoxButtonListData: IMyPageBoxButtonListItem[];
}

const MyPageBoxButtonList = ({ myPageBoxButtonListData }: MyPageBoxButtonListProps) => {
  return (
    <StyledMyPageBoxButtonList>
      {myPageBoxButtonListData.map((item) => (
        <MyPageBoxButtonListItem
          key={item.text}
          iconName={item.iconName}
          text={item.text}
          count={item.count}
          unit={item.unit}
        />
      ))}
    </StyledMyPageBoxButtonList>
  );
};

export default MyPageBoxButtonList;

const StyledMyPageBoxButtonList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
