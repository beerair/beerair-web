import MyPageBoxButtonListItem, { MyPageBoxButtonListItemProps } from '../MyPageBoxButtonListItem';

import styled from '@emotion/styled';

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
