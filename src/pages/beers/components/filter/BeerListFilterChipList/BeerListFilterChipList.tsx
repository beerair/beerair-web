import styled from '@emotion/styled';

import { hideScrollbar } from '@/styles/common';
import { BeerListFilterChip as BeerListFilterChipType } from '@/types';

import BeerListFilterChip from './BeerListFilterChip';

interface BeerListFilterChipListPros {
  filterChips: BeerListFilterChipType[];
  onRemove: (chip: BeerListFilterChipType) => void;
}

const BeerListFilterChipList: React.FC<BeerListFilterChipListPros> = ({
  filterChips,
  onRemove,
}) => {
  return (
    <StyledBeerListFilterChipList>
      {filterChips.map((chip) => (
        <BeerListFilterChip key={`${chip.filterKey}-${chip.id}`} onRemove={() => onRemove(chip)}>
          {chip.text}
        </BeerListFilterChip>
      ))}
    </StyledBeerListFilterChipList>
  );
};

const StyledBeerListFilterChipList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  overflow-x: auto;
  overflow-y: hidden;

  ${hideScrollbar};
`;

export default BeerListFilterChipList;
