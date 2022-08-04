import { useMemo, useState } from 'react';
import styled from '@emotion/styled';

import BeerCountryFilterList from '../BeerCountryFilterList';

import Tab from '@/components/commons/Tab';
import Swiper from '@/components/commons/Swiper';
// import { useGetContinents } from '@/queries';

const useGetContinents = () => {
  return {
    data: {
      contents: [
        { id: 1, name: '유럽' },
        { id: 2, name: '아시아' },
        { id: 3, name: '아메리카' },
        { id: 4, name: '호주' },
      ],
    },
  };
};

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
        {Array(continents.length)
          .fill(0)
          .map((_, index) => (
            <BeerCountryFilterList key={index} continentId={continents[index].id} />
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
