import styled from '@emotion/styled';
import _ from 'lodash';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { useGetBeerTypes } from '@/apis/beerTypes/getBeerTypes';
import { useGetCountries } from '@/apis/countries/getCountries';
import { HEADER_HEIGHT } from '@/components/Header';
import { useModal } from '@/hooks';
import {
  $beerListFilter,
  $beerListFilterChips,
  $beerListOrder,
  beerListOrderTextAlias,
} from '@/pages/beers/recoil/atoms';
import { BeerListFilter, BeerListFilterChip, IBeerType, ICountry } from '@/types';

import BeerListFilterBottomSheet from '../BeerListFilterBottomSheet';
import BeerListFilterChipList from '../BeerListFilterChipList';
import BeerListSortBottomSheet from '../BeerListSortBottomSheet';

import FilterButton from './FilterButton';
import SortButton from './SortButton';

interface BeerListFilterAndSorterProps {
  resultCount?: number;
  totalCount?: number;
}

// TODO: filter, order -> QueryParams 연동
const BeerListFilterAndSorter = ({ resultCount, totalCount }: BeerListFilterAndSorterProps) => {
  const { data: beerTypes = [] } = useGetBeerTypes();
  const { data: countries = [] } = useGetCountries();

  const [filter, setFilter] = useRecoilState($beerListFilter);
  const [filterChips, setFilterChips] = useRecoilState($beerListFilterChips);
  const [order, setOrder] = useRecoilState($beerListOrder);

  const [isFilterBottomSheetOpen, openFilterBottomSheet, closeFilterBottomSheet] = useModal(false);
  const [isSortBottomSheetOpen, openSortBottomSheet, closeSortBottomSheet] = useModal(false);

  useEffect(() => {
    if (!_.isEmpty(filter) || !beerTypes.length || !countries.length) return;

    setFilterChips(initFilterChips({ filter, beerTypes, countries }));
  }, [beerTypes, countries, filter, setFilterChips]);

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

const getBeerTypeNameKor = (beerTypes: IBeerType[], typeId: IBeerType['id']) => {
  return beerTypes.find((beerType) => beerType.id === typeId)?.korName || '';
};

const getCountryNameKor = (countries: ICountry[], countryId: ICountry['id']) => {
  return countries.find((country) => country.id === countryId)?.korName || '';
};

const initFilterChips = ({
  filter,
  beerTypes,
  countries,
}: {
  filter: BeerListFilter;
  beerTypes: IBeerType[];
  countries: ICountry[];
}): BeerListFilterChip[] => {
  const { type = [], country = [] } = filter;

  return [
    ...type.map((typeId) => ({
      id: typeId,
      text: getBeerTypeNameKor(beerTypes, typeId),
      filterKey: 'type' as const,
    })),
    ...country.map((countryId) => ({
      id: countryId,
      text: getCountryNameKor(countries, countryId),
      filterKey: 'country' as const,
    })),
  ];
};
