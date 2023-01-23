import styled from '@emotion/styled';

import Icon from '@/components/Icon';

interface UploadButtonProps {
  onClick: () => void;
  size?: 'small' | 'large';
}

const UploadButton = ({ onClick, size = 'small' }: UploadButtonProps) => {
  return (
    <StyledUploadButton type="button" onClick={onClick} size={size}>
      <Icon name="Camera" size={getUploadButtonIconSize(size)} />
    </StyledUploadButton>
  );
};

export default UploadButton;

const getUploadButtonSize = (size: UploadButtonProps['size'] = 'small') => {
  return {
    small: 80,
    large: 100,
  }[size];
};

const getUploadButtonIconSize = (size: UploadButtonProps['size'] = 'small') => {
  return {
    small: 26,
    large: 33,
  }[size];
};

const StyledUploadButton = styled.button<Pick<UploadButtonProps, 'size'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => `${getUploadButtonSize(p.size)}px`};
  height: ${(p) => `${getUploadButtonSize(p.size)}px`};
  border-radius: 10px;

  background-color: ${(p) => p.theme.color.grey1};
`;
