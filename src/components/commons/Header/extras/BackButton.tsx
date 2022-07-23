import { ButtonHTMLAttributes } from 'react';
import { useRouter } from 'next/router';

import Icon from '@/components/commons/Icon';

interface BackButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {}

const BackButton = ({ onClick, ...props }: BackButtonProps) => {
  const router = useRouter();

  return (
    <button type="button" aria-label="뒤로가기" onClick={router.back} {...props}>
      <Icon name="Back" color="whiteOpacity50" />
    </button>
  );
};

export default BackButton;
