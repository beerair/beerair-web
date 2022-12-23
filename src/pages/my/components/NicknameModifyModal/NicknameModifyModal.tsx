import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Modal from '@/components/Modal';

const LETTERS_REGEX = /^[가-힣A-Za-z0-9]*$/i;

interface Props {
  open: boolean;
  closeModal: () => void;
  onSubmit: () => void;
}

interface FormState {
  nickname: string;
}

const NicknameModifyModal = ({ open, closeModal, onSubmit }: Props) => {
  const {
    register,
    watch,
    formState: { isValid, isDirty, errors },
    handleSubmit,
  } = useForm<FormState>({
    mode: 'onChange',
  });

  const { nickname } = watch();

  return (
    <Modal
      open={open}
      closeModal={closeModal}
      header="닉네임 수정하기"
      withCloseButton
      description={
        <StyledForm onSubmit={onSubmit}>
          <StyledInput
            id="nickname"
            type="text"
            value={nickname}
            placeholder="닉네임 입력"
            maxLength={15}
            defaultValue=""
            {...register('nickname', {
              maxLength: 15,
              required: '닉네임을 입력해주세요',
              pattern: {
                value: LETTERS_REGEX,
                message: '올바른 값을 입력해주세요',
              },
            })}
          />
          {errors.nickname?.message && <p className="error-text">{errors.nickname.message}</p>}
          <p className="helper-text">최대 15글자까지 입력할 수 있습니다</p>
        </StyledForm>
      }
      buttons={
        <Button
          type="primary"
          width="large"
          disabled={!isDirty || !isValid}
          onClick={handleSubmit(onSubmit)}
        >
          완료
        </Button>
      }
    />
  );
};

export default NicknameModifyModal;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .helper-text {
    ${({ theme }) => theme.fonts.Body1};
    color: ${({ theme }) => theme.color.grey3};
  }
  .error-text {
    ${({ theme }) => theme.fonts.Body1};
    color: ${({ theme }) => theme.color.red};
    margin-bottom: 5px;
  }
`;

const StyledInput = styled.input`
  width: 240px;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey2};
  margin-top: 52px;
  margin-bottom: 12px;
  ${({ theme }) => theme.fonts.SubTitle2};
  color: ${({ theme }) => theme.color.black100};
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.color.grey4};
  }
`;
