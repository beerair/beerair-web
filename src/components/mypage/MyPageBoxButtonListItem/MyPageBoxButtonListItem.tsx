import styled from '@emotion/styled';

import Icon, { IconNameType } from '@/components/commons/Icon';

export interface IMyPageBoxButtonListItem {
  iconName: IconNameType;
  text: string;
  count?: number;
  unit?: string;
  onClick?: () => void;
}

const MyPageBoxButtonListItem = ({
  iconName,
  text,
  count,
  unit,
  onClick,
}: IMyPageBoxButtonListItem) => {
  return (
    <StyledMyPageBoxButtonListItem onClick={onClick}>
      <SquareBox>
        <Icon name={iconName} size={iconName === 'Heart' ? 30 : 20} color="white" />
      </SquareBox>
      <Content>{text}</Content>
      <Count>
        {count}
        {unit}
      </Count>
      <Icon name="Next" size={16} />
    </StyledMyPageBoxButtonListItem>
  );
};

export default MyPageBoxButtonListItem;

const StyledMyPageBoxButtonListItem = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 14px;
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
  border-radius: 8px;
  cursor: pointer;
`;

const SquareBox = styled.div`
  width: 42px;
  height: 42px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.semanticColor.primary};
  border-radius: 4px;
  margin-right: 20px;
`;

const Content = styled.span`
  ${({ theme }) => theme.fonts.SubTitle2}
  color: ${({ theme }) => theme.color.white};
`;

const Count = styled.div`
  ${({ theme }) => theme.fonts.SubTitle2}
  color: ${({ theme }) => theme.color.white};
  margin-left: auto;
  margin-right: 5px;
`;