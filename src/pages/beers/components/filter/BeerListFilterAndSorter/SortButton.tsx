import styled from '@emotion/styled';

import Icon from '@/components/Icon';

interface SortButtonProps {
  label: string;
  onClick: () => void;
}

const SortButton = ({ label, onClick }: SortButtonProps) => {
  return (
    <StyledSortButton type="button" onClick={onClick}>
      <p className="sort-label">{label}</p>
      <Icon name="ArrowDown" />
    </StyledSortButton>
  );
};

export default SortButton;

const StyledSortButton = styled.button`
  display: flex;
  align-items: center;

  .sort-label {
    ${(p) => p.theme.fonts.Body4};
    color: ${(p) => p.theme.color.whiteOpacity80};
  }
`;
