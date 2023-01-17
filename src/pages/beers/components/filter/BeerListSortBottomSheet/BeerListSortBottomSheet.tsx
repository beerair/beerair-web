import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import BottomSheet from '@/components/BottomSheet';
import Icon from '@/components/Icon';
import { $beerListOrder, beerListOrderTextAlias } from '@/pages/beers/recoil/atoms';
import { theme } from '@/themes';
import { BeerListOrder } from '@/types';

interface BeerListSortBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
}

const BeerListSortBottomSheet = ({ open, onClose }: BeerListSortBottomSheetProps) => {
  const [order, setOrder] = useRecoilState($beerListOrder);

  const handleOrderItemClick = (order: BeerListOrder) => {
    setOrder(order);
    onClose();
  };

  return (
    <BottomSheet open={open} onDimClick={onClose}>
      <StyledWrapper>
        {Object.entries(beerListOrderTextAlias).map(([orderKey, orderText]) => {
          const isSelected = orderKey === order;
          return (
            <OrderItem
              key={orderKey}
              aria-checked={isSelected}
              isSelected={isSelected}
              onClick={() => handleOrderItemClick(orderKey as BeerListOrder)}
            >
              <p>{orderText}</p>
              <Icon
                name="Check"
                size={30}
                style={{ fill: isSelected ? theme.color.yellow : 'transparent' }}
                aria-hidden={true}
              />
            </OrderItem>
          );
        })}
      </StyledWrapper>
    </BottomSheet>
  );
};

export default BeerListSortBottomSheet;

const StyledWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
`;

const OrderItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;

  p {
    ${(p) => p.theme.fonts.SubTitle2};
    color: ${(p) => (p.isSelected ? p.theme.color.yellow : p.theme.color.whiteOpacity50)};
    padding: 0 10px;
    margin-left: 30px;
  }
`;
