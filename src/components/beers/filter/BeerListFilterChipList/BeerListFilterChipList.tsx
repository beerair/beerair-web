import styled from '@emotion/styled';

import BeerListFilterChip from './BeerListFilterChip';

import { hideScrollbar } from '@/styles/common';

export type BeerListFilterChipType = {
  id: number | string;
  text: string;
  type: 'beerType' | 'country';
};

interface BeerListFilterChipListPros {
  filterChips: BeerListFilterChipType[];
  onRemove: (chip: BeerListFilterChipType) => void;
}

const BeerListFilterChipList = ({ filterChips, onRemove }: BeerListFilterChipListPros) => {
  return (
    <StyledWrapper>
      {filterChips.map((chip) => (
        <BeerListFilterChip key={`${chip.type}-${chip.id}`} onRemove={() => onRemove(chip)}>
          {chip.text}
        </BeerListFilterChip>
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
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
