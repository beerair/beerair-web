import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import { useGetBeerTypes } from '@/apis/beerTypes/getBeerTypes';
import { IBeerType } from '@/types';

import BeerTypeFilterItem from './BeerTypeFilterItem';
import { $nextBeerListFilterChips } from './recoil/atoms';
import { $selectedBeerTypeIds } from './recoil/selectors';

const BeerTypeFilterList = () => {
  const { data: beerTypes } = useGetBeerTypes();

  const [selectedBeerTypeIds, setSelectedBeerTypeIds] = useRecoilState($selectedBeerTypeIds);
  const [nextFilterChips, setNextFilterChips] = useRecoilState($nextBeerListFilterChips);

  const selectItem = (beerType: IBeerType) => {
    setSelectedBeerTypeIds([...selectedBeerTypeIds, beerType.id]);
    setNextFilterChips([
      ...nextFilterChips,
      { id: beerType.id, text: beerType.korName, filterKey: 'type' },
    ]);
  };

  const unselectItem = (beerType: IBeerType) => {
    setSelectedBeerTypeIds(selectedBeerTypeIds.filter((id) => beerType.id !== id));
    setNextFilterChips(
      nextFilterChips.filter((v) => !(v.id === beerType.id && v.filterKey === 'type')),
    );
  };

  return (
    <StyledBeerTypeFilterList>
      {beerTypes?.map((beerType) => {
        const isSelected = selectedBeerTypeIds.includes(beerType.id);
        return (
          <BeerTypeFilterItem
            key={beerType.id}
            {...beerType}
            isSelected={isSelected}
            onClick={() => (isSelected ? unselectItem : selectItem)(beerType)}
          />
        );
      })}
    </StyledBeerTypeFilterList>
  );
};

const StyledBeerTypeFilterList = styled.ul`
  flex: 1;
  overflow-y: auto;
`;

export default BeerTypeFilterList;
