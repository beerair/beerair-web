import styled from '@emotion/styled';

import MyPageBoxButtonListItem, { MyPageBoxButtonListItemProps } from '../MyPageBoxButtonListItem';


interface MyPageBoxButtonListProps {
  myPageBoxButtonListItems: MyPageBoxButtonListItemProps[];
}

const MyPageBoxButtonList = ({ myPageBoxButtonListItems }: MyPageBoxButtonListProps) => {
  return (
    <StyledMyPageBoxButtonList>
      {myPageBoxButtonListItems.map((item) => (
        <MyPageBoxButtonListItem key={item.text} {...item} />
      ))}
    </StyledMyPageBoxButtonList>
  );
};

export default MyPageBoxButtonList;

const StyledMyPageBoxButtonList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
