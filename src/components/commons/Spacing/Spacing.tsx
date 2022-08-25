import styled from '@emotion/styled';

interface SpacingProps {
  size: number;
}

const Spacing: React.FC<SpacingProps> = ({ size }) => {
  return <StyledSpacing size={size} />;
};

export default Spacing;

const StyledSpacing = styled.div<SpacingProps>`
  height: ${({ size }) => size}px;
`;
