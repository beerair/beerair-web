import styled from '@emotion/styled';
import { useMemo, useState } from 'react';

import { useGetContinents } from '@/apis/continents/getContinents';
import Swiper from '@/components/Swiper';
import Tab from '@/components/Tab';

import BeerCountryFilterList from './BeerCountryFilterList';

const BeerCountryFilterTab = () => {
  const [activatedIndex, setActivatedIndex] = useState(0);

  const { data } = useGetContinents();

  const continents = useMemo(
    () => [{ id: undefined, korName: '전체', engName: 'All' }, ...(data || [])],
    [data],
  );
  const continentTabItems = useMemo(() => continents.map(({ korName }) => korName), [continents]);

  return (
    <Tab
      tabItems={continentTabItems}
      size="small"
      type="primary"
      isGhost
      activatedIndex={activatedIndex}
      onChange={setActivatedIndex}
    >
      <StyledSwiper currentSlide={activatedIndex} afterChange={setActivatedIndex}>
        {continents.map((continent) => (
          <BeerCountryFilterList key={continent.id} continentId={continent.id} />
        ))}
      </StyledSwiper>
    </Tab>
  );
};

const StyledSwiper = styled(Swiper)`
  flex: 1;
  overflow: hidden;

  .slick-list,
  .slick-track {
    height: 100%;
  }

  .slick-slide {
    overflow-y: auto;
  }
`;

export default BeerCountryFilterTab;
