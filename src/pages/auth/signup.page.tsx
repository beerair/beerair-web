import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import BeginningLayout from '@/components/layouts/BeginningLayout';
import Button from '@/components/Button';

/** @todo api 연동 */
const SignUpPage = () => {
  const router = useRouter();

  const [nickname, setNickname] = useState('');

  // const { mutateAsync: updateUserMutation } = useUpdateUser();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value?.length > 15) {
      return;
    }

    setNickname(e.target.value);
  };

  const handleComplete = async () => {
    // await updateUserMutation(
    //   { nickname },
    //   {
    //     onSuccess: () => {
    //       router.replace('/');
    //     },
    //   },
    // );
  };

  return (
    <BeginningLayout title={`사용하실 닉네임을\n입력해 주세요.`} cloudColor="whiteOpacity35">
      <StyledWrapper>
        <label htmlFor="nickname">닉네임</label>
        <StyledInput
          id="nickname"
          type="text"
          value={nickname}
          onChange={handleInputChange}
          placeholder="닉네임 입력"
          maxLength={15}
        />
        <p className="helper-text">최대 15글자까지 입력 할 수 있습니다.</p>
        <Button width="244px" type="primary" disabled={!nickname} onClick={handleComplete}>
          완료
        </Button>
      </StyledWrapper>
    </BeginningLayout>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
  padding: 0 0 40%;

  label {
    width: 0;
    height: 0;
    overflow: hidden;
  }

  .helper-text {
    margin: 30px 0 10vh;
    ${(p) => p.theme.fonts.Body5};
    color: ${(p) => p.theme.color.whiteOpacity50};
  }
`;

const StyledInput = styled.input`
  width: 240px;
  height: 40px;
  border-bottom: 1px solid ${(p) => p.theme.color.white};
  color: ${(p) => p.theme.color.white};
  ${(p) => p.theme.fonts.SubTitle2};
  text-align: center;

  &::placeholder {
    color: ${(p) => p.theme.color.whiteOpacity50};
  }
`;

export default SignUpPage;
