import { ButtonHTMLAttributes } from 'react';

import Icon from '@/components/commons/Icon';

interface CloseButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {}

const CloseButton = (props: CloseButtonProps) => {
  return (
    <button type="button" aria-label="닫기" {...props}>
      <Icon name="X" color="white" size={24} />
    </button>
  );
};

export default CloseButton;
