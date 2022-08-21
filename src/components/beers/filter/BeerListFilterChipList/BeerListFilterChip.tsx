import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';

interface BeerListFilterChipProps {
  children: string;
  onRemove: () => void;
}

const BeerListFilterChip: React.FC<BeerListFilterChipProps> = ({ children, onRemove }) => {
  return (
    <StyledWrapper>
      <p>{children}</p>
      <button type="button" onClick={onRemove} aria-label="삭제">
        <Icon name="X" size={12} color="grey4" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.span`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  min-width: 62px;
  padding: 6px 10px 6px 14px;
  border-radius: 14px;
  background-color: ${(p) => p.theme.semanticColor.secondary};

  > p {
    white-space: nowrap;
    color: ${(p) => p.theme.color.grey5};
    ${(p) => p.theme.fonts.SubTitle5};
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    margin-left: 8px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${(p) => p.theme.color.grey5};
  }

  & + span {
    margin-left: 10px;
  }
`;

export default BeerListFilterChip;
