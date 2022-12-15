import styled from '@emotion/styled';

import { IFlavor } from '@/types';
import FlavorListItem from '../FlavorListItem';

interface FlavorListProps {
  flavors: IFlavor[];
}

const FlavorList = ({ flavors }: FlavorListProps) => {
  if (!flavors?.length) {
    return null;
  }

  return (
    <StyledFlavorList>
      {flavors?.map((flavor) => (
        <FlavorListItem key={flavor.id} content={flavor.content} count={flavor.count} />
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
