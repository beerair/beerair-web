import { useMemo, useState } from 'react';
import styled from '@emotion/styled';

import BeerCountryFilterList from '../BeerCountryFilterList';

import Tab from '@/components/commons/Tab';
import Swiper from '@/components/commons/Swiper';
import { useGetContinents } from '@/hooks/queries/continent';

const BeerCountryFilterTab = () => {
  const [activatedIndex, setActivatedIndex] = useState(0);

  const { data } = useGetContinents();

  const continents = useMemo(
    () => [{ id: undefined, name: '전체' }, ...(data?.contents || [])],
    [data?.contents],
  );
  const continentTabItems = useMemo(() => continents.map(({ name }) => name), [continents]);

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
