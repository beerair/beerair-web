import styled from '@emotion/styled';
import ProfileBoxButtonListItem, { IProfileBoxButtonListItem } from '../ProfileBoxButtonListItem';

interface Props {
  data: IProfileBoxButtonListItem[];
}

const ProfileBoxButtonList = ({ data }: Props) => {
  return (
    <StyledProfileBoxButtonList>
      {data &&
        data.map((item) => (
          <ProfileBoxButtonListItem
            key={item.text}
            iconName={item.iconName}
            text={item.text}
            count={item.count}
            unit={item.unit}
          />
        ))}
    </StyledProfileBoxButtonList>
  );
};

export default ProfileBoxButtonList;

const StyledProfileBoxButtonList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
