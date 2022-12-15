import { ComponentMeta } from '@storybook/react';
import LikeBeerToggleButton from '.';

export default {
  component: LikeBeerToggleButton,
  args: {},
} as ComponentMeta<typeof LikeBeerToggleButton>;

export const 좋아요_버튼 = () => {
  return <LikeBeerToggleButton liked={true} id={2} />;
};
