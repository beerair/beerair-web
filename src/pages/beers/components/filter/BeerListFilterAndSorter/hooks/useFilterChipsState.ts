import { isEmpty } from 'lodash';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useGetBeerTypes } from '@/apis/beerTypes/getBeerTypes';
import { useGetCountries } from '@/apis/countries/getCountries';
import { BeerListFilter, BeerListFilterChip, ICountry, IBeerType } from '@/types';

export const useFilterChipsState = (
  filter: BeerListFilter,
): [BeerListFilterChip[], Dispatch<SetStateAction<BeerListFilterChip[]>>] => {
  const { data: beerTypes = [] } = useGetBeerTypes();
  const { data: countries = [] } = useGetCountries();

  const [filterChips, setFilterChips] = useState<BeerListFilterChip[]>([]);

  useEffect(() => {
    if (!beerTypes.length || !countries.length) return;

    setFilterChips(initFilterChips({ filter, beerTypes, countries }));
  }, [beerTypes, countries, filter, setFilterChips]);

  return [filterChips, setFilterChips];
};

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
  if (isEmpty(filter) || !beerTypes.length || !countries.length) {
    return [];
  }

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
