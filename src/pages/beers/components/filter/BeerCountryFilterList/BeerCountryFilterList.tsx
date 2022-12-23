import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import { useGetCountries } from '@/apis/countries/getCountries';
import { IContinent, ICountry } from '@/types-old';

import { $nextBeerListFilterChips } from '../recoil/atoms';
import { $selectedBeerCountryIds } from '../recoil/selectors';

import BeerCountryFilterItem from './BeerCountryFilterItem';


interface BeerCountryFilterListProps {
  continentId?: IContinent['id'];
}

const BeerCountryFilterList: React.FC<BeerCountryFilterListProps> = ({ continentId }) => {
  const [selectedCountryIds, setSelectedCountryIds] = useRecoilState($selectedBeerCountryIds);
  const [nextFilterChips, setNextFilterChips] = useRecoilState($nextBeerListFilterChips);

  const { countries = [] } = useGetCountries(continentId);

  const selectItem = (country: ICountry) => {
    setSelectedCountryIds([...selectedCountryIds, country.id]);
    setNextFilterChips([
      ...nextFilterChips,
      { id: country.id, text: country.nameKor, type: 'country' },
    ]);
  };

  const unselectItem = (country: ICountry) => {
    setSelectedCountryIds(selectedCountryIds.filter((countryId) => country.id !== countryId));
    setNextFilterChips(
      nextFilterChips.filter((v) => !(v.id === country.id && v.type === 'country')),
    );
  };

  const handleItemClick = (country: ICountry) => () => {
    const isSelected = selectedCountryIds.includes(country.id);
    isSelected ? unselectItem(country) : selectItem(country);
  };

  return (
    <StyledWrapper>
      {countries.map((country) => (
        <BeerCountryFilterItem
          key={country.id}
          country={country}
          isSelected={selectedCountryIds.includes(country.id)}
          onClick={handleItemClick(country)}
        />
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 16px 12px;
  grid-template-columns: repeat(auto-fill, minmax(90px, auto));
  justify-items: center;
  height: 100%;
  padding: 16px 20px;
`;

export default BeerCountryFilterList;
