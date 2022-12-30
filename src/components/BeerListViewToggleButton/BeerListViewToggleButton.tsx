import styled from '@emotion/styled';
import { ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { $beerListViewType, BeerListViewType, BEER_LIST_VIEW_ATOM_KEY } from '@/recoil/atoms';
import localStorage from '@/utils/localStorage';

import Icon, { IconNameType } from '../Icon';

const TOGGLE_BUTTONS: { type: BeerListViewType; iconName: IconNameType }[] = [
  { type: 'grid', iconName: 'GridView' },
  { type: 'list', iconName: 'ListView' },
];

const BeerListViewToggleButton = () => {
  const [type, setType] = useRecoilState($beerListViewType);

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value as BeerListViewType);
  };

  return (
    <StyledWrapper>
      {TOGGLE_BUTTONS.map((button) => {
        const isSelected = type === button.type;

        return (
          <label key={button.type}>
            <input
              type="radio"
              name="beerListView"
              checked={isSelected}
              onChange={handleRadioChange}
              value={button.type}
              hidden
            />
            <Icon name={button.iconName} color={isSelected ? 'white' : 'whiteOpacity35'} />
          </label>
        );
      })}
    </StyledWrapper>
  );
};

export default BeerListViewToggleButton;

const StyledWrapper = styled.div`
  display: flex;

  > butto:first-of-type {
    margin-right: 8px;
  }
`;
