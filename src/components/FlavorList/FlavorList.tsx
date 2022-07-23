import styled from '@emotion/styled';

import FlavorListItem from '@/components/FlavorListItem';
import { IFlavorListItem } from '../FlavorListItem';

interface Props {
  flavors: IFlavorListItem[];
  limit?: number;
}

const FlavorList = ({ flavors, limit = 3 }: Props) => {
  if (!flavors?.length) {
    return null;
  }

  return (
    <StyledFlavorList>
      {flavors?.slice(0, limit).map(({ flavor, count }) => (
        <FlavorListItem key={flavor.id} flavor={flavor} count={count} />
      ))}
    </StyledFlavorList>
  );
};

export default FlavorList;

const StyledFlavorList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
  margin: 26px 0;
`;