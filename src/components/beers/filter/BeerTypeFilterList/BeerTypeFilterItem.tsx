import { MouseEvent } from 'react';
import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';
import { ellipsis } from '@/styles/common';
import { IBeerType } from '@/types';

const IMAGE_WIDTH = '70px';
const CHECK_ICON_WIDTH = '30px';

interface BeerTypeFilterItemProps extends Pick<IBeerType, 'nameKor' | 'description' | 'imageUrl'> {
  isSelected: boolean;
  onClick: (e?: MouseEvent) => void;
}

const BeerTypeFilterItem = ({
  nameKor,
  description,
  imageUrl,
  isSelected,
  onClick = () => null,
}: BeerTypeFilterItemProps) => {
  return (
    <StyledWrapper aria-checked={isSelected} onClick={onClick}>
      <BeerTypeImage src={imageUrl} alt="" />
      <BeerTypeInfo>
        <b>{nameKor}</b>
        <p className="description">{description} </p>
      </BeerTypeInfo>
      {isSelected && <Icon name="Check" width={CHECK_ICON_WIDTH} semanticColor="secondary" />}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 20px;

  & + li {
    ${(p) => `border-top: 1px solid ${p.theme.color.whiteOpacity35};`};
  }

  > svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

const BeerTypeImage = styled.img`
  flex-shrink: 0;
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_WIDTH};
  margin-right: 20px;
`;

const BeerTypeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  height: 100%;
  padding-right: 20px;
  margin-right: ${CHECK_ICON_WIDTH};

  color: ${(p) => p.theme.color.white};

  > b {
    margin-bottom: 10px;

    ${(p) => p.theme.fonts.SubTitle2};
    ${ellipsis(1)};
  }

  > p {
    ${(p) => p.theme.fonts.Body5};
    ${ellipsis(2)};
  }
`;

export default BeerTypeFilterItem;
