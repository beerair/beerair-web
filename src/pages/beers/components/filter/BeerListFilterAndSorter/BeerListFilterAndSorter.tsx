import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { useRecoilState, useRecoilValue } from 'recoil';

import { HEADER_HEIGHT } from '@/components/Header';
import { useModal } from '@/hooks';
import {
  $beerListFilter,
  $beerListOrder,
  beerListOrderTextAlias,
} from '@/pages/beers/recoil/atoms';
import { BeerListFilter, BeerListFilterChip } from '@/types';

import BeerListFilterBottomSheet from '../BeerListFilterBottomSheet';
import BeerListFilterChipList from '../BeerListFilterChipList';
import BeerListSortBottomSheet from '../BeerListSortBottomSheet';

import FilterButton from './FilterButton';
import { useFilterChipsState } from './hooks/useFilterChipsState';

const SortButton = dynamic(() => import('./SortButton'), {
  ssr: false,
});

interface BeerListFilterAndSorterProps {
  resultCount?: number;
  totalCount?: number;
}

const BeerListFilterAndSorter = ({ resultCount, totalCount }: BeerListFilterAndSorterProps) => {
  const [filter, setFilter] = useRecoilState($beerListFilter);
  const [filterChips, setFilterChips] = useFilterChipsState(filter);
  const order = useRecoilValue($beerListOrder);

  const [isFilterBottomSheetOpen, openFilterBottomSheet, closeFilterBottomSheet] = useModal(false);
  const [isSortBottomSheetOpen, openSortBottomSheet, closeSortBottomSheet] = useModal(false);

  const removeFilterChip = (chip: BeerListFilterChip) => {
    setFilter({
      ...filter,
      [chip.filterKey]: filter[chip.filterKey]?.filter((id) => id !== chip.id),
    });
    setFilterChips(
      filterChips.filter((v) => !(v.id === chip.id && v.filterKey === chip.filterKey)),
    );
  };

  const applyFilter = (nextFilter: BeerListFilter, nextFilterChips: BeerListFilterChip[]) => {
    setFilter(nextFilter);
    setFilterChips(nextFilterChips);
  };

  return (
    <>
      <StyledWrapper>
        <div className="filter-and-sorter">
          <FilterButton hasAppliedFilter={!!filterChips.length} onClick={openFilterBottomSheet} />
          <p className="result">
            검색 결과 {resultCount ?? '-'}/{totalCount ?? '-'}
          </p>
          <SortButton label={beerListOrderTextAlias[order]} onClick={openSortBottomSheet} />
        </div>
        {!!filterChips.length && (
          <BeerListFilterChipList filterChips={filterChips} onRemove={removeFilterChip} />
        )}
      </StyledWrapper>
      <BeerListFilterBottomSheet
        open={isFilterBottomSheetOpen}
        defaultFilter={filter}
        defaultFilerChips={filterChips}
        onClose={closeFilterBottomSheet}
        onApply={applyFilter}
      />
      <BeerListSortBottomSheet open={isSortBottomSheetOpen} onClose={closeSortBottomSheet} />
    </>
  );
};

export default BeerListFilterAndSorter;

const StyledWrapper = styled.div`
  position: sticky;
  top: ${HEADER_HEIGHT}px;
  z-index: 10;

  background-color: ${(p) => p.theme.semanticColor.background};
  border-bottom: 1px solid ${(p) => p.theme.color.whiteOpacity20};

  .filter-and-sorter {
    display: flex;
    align-items: center;
    padding: 0 20px 10px;

    .result {
      margin: 0 auto 0 8px;
      ${(p) => p.theme.fonts.Body4};
      color: ${(p) => p.theme.color.whiteOpacity80};
    }
  }
`;
