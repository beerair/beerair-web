import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import BeerCountryFilterItem from './BeerCountryFilterItem';
import { $nextBeerListFilterChips } from '../recoil/atoms';
import { $selectedBeerCountryIds } from '../recoil/selectors';

import { IContinent, ICountry } from '@/types';
// import { useGetCountries } from '@/queries';

/** @todo api 연동 */
const useGetCountries = (continentId?: number) => {
  return {
    countries: [
      {
        id: 1,
        nameKor: '독일',
        nameEng: '',
        imageUrl: '',
        backgroundImageUrl: '',
      },
      {
        id: 2,
        nameKor: '프랑스',
        nameEng: '',
        imageUrl: '',
        backgroundImageUrl: '',
      },
      {
        id: 3,
        nameKor: '대한민국',
        nameEng: '',
        imageUrl: '',
        backgroundImageUrl: '',
      },
      {
        id: 4,
        nameKor: '영국',
        nameEng: '',
        imageUrl: '',
        backgroundImageUrl: '',
      },
      {
        id: 5,
        nameKor: '벨기에',
        nameEng: '',
        imageUrl: '',
        backgroundImageUrl: '',
      },
    ],
  };
};

interface BeerCountryFilterListProps {
  continentId?: IContinent['id'];
}

const BeerCountryFilterList = ({ continentId }: BeerCountryFilterListProps) => {
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
          {...country}
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
