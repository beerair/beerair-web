import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

import ModalLayout from './ModalLayout';

export default {
  component: ModalLayout,
} as ComponentMeta<typeof ModalLayout>;

const StyledWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;

  padding: 16px;
  border-radius: 16px;

  background-color: ${(p) => p.theme.color.white};

  ${(p) => !p.open && `display:none;`}

  > p {
    height: 30px;
    color: ${(p) => p.theme.color.black100};
  }
`;

const Template: ComponentStory<typeof ModalLayout> = (args) => {
  return (
    <ModalLayout open={args.open}>
      <StyledWrapper open={args.open}>
        <p>모달</p>
      </StyledWrapper>
    </ModalLayout>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
};
