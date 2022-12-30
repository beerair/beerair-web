import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

import { $beerListViewType, BeerListViewType } from '@/recoil/atoms';

import Icon, { IconNameType } from '../../../../components/Icon';

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
