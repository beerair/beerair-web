import styled from '@emotion/styled';
import { useEffect } from 'react';
import { RecoilRoot, useRecoilState, useResetRecoilState } from 'recoil';

import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Tab from '@/components/Tab';
import { BeerListFilter, BeerListFilterChip } from '@/types';

import BeerListFilterChipList from '../BeerListFilterChipList';

import BeerCountryFilterTab from './BeerCountryFilterTab';
import BeerTypeFilterList from './BeerTypeFilterList';
import { $nextBeerListFilter, $nextBeerListFilterChips } from './recoil/atoms';

interface BeerListFilterBottomSheetProps {
  open: boolean;
  defaultFilter?: BeerListFilter;
  defaultFilerChips?: BeerListFilterChip[];
  onClose: () => void;
  onApply: (nextFiler: BeerListFilter, nextFilerChips: BeerListFilterChip[]) => void;
}

const BeerListFilterBottomSheet: React.FC<BeerListFilterBottomSheetProps> = ({
  open,
  defaultFilter,
  defaultFilerChips,
  onClose,
  onApply,
}) => {
  const [nextFilter, setNextFilter] = useRecoilState($nextBeerListFilter);
  const [nextFilterChips, setNextFilterChips] = useRecoilState($nextBeerListFilterChips);

  const resetNextFilter = useResetRecoilState($nextBeerListFilter);
  const resetNextFilterChips = useResetRecoilState($nextBeerListFilterChips);

  useEffect(() => {
    if (open && defaultFilter && defaultFilerChips) {
      setNextFilter(defaultFilter);
      setNextFilterChips(defaultFilerChips);
    }
  }, [open, defaultFilter, defaultFilerChips, setNextFilter, setNextFilterChips]);

  const clearNextFilter = () => {
    resetNextFilter();
    resetNextFilterChips();
  };

  const removeFilterChip = (chip: BeerListFilterChip) => {
    setNextFilter({
      ...nextFilter,
      [chip.filterKey]: nextFilter[chip.filterKey]?.filter((id) => id !== chip.id),
    });
    setNextFilterChips(
      nextFilterChips.filter((v) => !(v.id === chip.id && v.filterKey === chip.filterKey)),
    );
  };

  const applyFilter = () => {
    onApply(nextFilter, nextFilterChips);
    onClose();
  };

  return (
    <StyledBottomSheet open={open} onDimClick={onClose} isFull>
      <StyledHeader>
        <button className="close-button" type="button" aria-label="닫기" onClick={onClose}>
          <Icon name="X" color="white" />
        </button>
        <button className="clear-button" type="button" onClick={clearNextFilter}>
          초기화
        </button>
      </StyledHeader>
      <StyledTab tabItems={['종류', '나라']} type="primary" size="large">
        <BeerTypeFilterList />
        <BeerCountryFilterTab />
      </StyledTab>
      <StyledFooter>
        {!!nextFilterChips.length && (
          <BeerListFilterChipList filterChips={nextFilterChips} onRemove={removeFilterChip} />
        )}
        <StyledApplyButonWrapper>
          <Button type="primary" width="large" onClick={applyFilter}>
            필터 적용
          </Button>
        </StyledApplyButonWrapper>
      </StyledFooter>
    </StyledBottomSheet>
  );
};

const BeerListFilterBottomSheetRecoilWrapper: React.FC<BeerListFilterBottomSheetProps> = (
  props,
) => {
  return (
    <RecoilRoot>
      <BeerListFilterBottomSheet {...props} />
    </RecoilRoot>
  );
};

export default BeerListFilterBottomSheetRecoilWrapper;

const StyledBottomSheet = styled(BottomSheet)`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  padding: 8px 20px;

  .clear-button {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: ${(p) => p.theme.color.whiteOpacity65};
  }
`;

const StyledTab = styled(Tab)`
  flex: 1;
  overflow: hidden;
`;

const StyledFooter = styled.section`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-top: 1px solid ${(p) => p.theme.semanticColor.secondary};

  background-color: ${(p) => p.theme.semanticColor.backgroundLow};

  /** 아이폰 하단 노치 영역 대응 */
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    padding-bottom: env(safe-area-inset-bottom);
  }
`;

const StyledApplyButonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80px;
`;
