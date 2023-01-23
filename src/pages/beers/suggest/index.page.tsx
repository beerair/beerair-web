import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { FieldValues } from 'react-hook-form';

import { useCreateSuggest } from '@/apis/suggests/createSuggest';
import { useUploadImage } from '@/apis/upload/uploadImage';
import EntityForm from '@/components/EntityForm';
import FormSubmitButton from '@/components/FormSubmitButton';
import Header, { HEADER_HEIGHT } from '@/components/Header';
import { BackButton } from '@/components/Header/extras';

import BeerSuggestLayout from './components/BeerSuggestLayout';
import MultiImageUploadField from './components/MultiImageUploadField';
import TextField from './components/TextField';

// TODO: api 동작 확인 필요
const BeerSuggestPage = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const { mutateAsync: uploadImagesMutation } = useUploadImage();
  const { mutateAsync: createSuggestMutation } = useCreateSuggest();

  const handleSubmit = useCallback(
    async (data: FieldValues) => {
      const payload = {
        images: data.images
          ? {
              beerImage1: data.images[0],
              beerImage2: data.images[1],
            }
          : undefined,
        name: data.name,
      };

      await createSuggestMutation(payload, {
        onSuccess: () => {
          setIsCompleted(true);
        },
      });
    },
    [createSuggestMutation],
  );

  const handleImageUpload = useCallback(
    async (data: FormData) => {
      const { imageUrl } = await uploadImagesMutation(data);
      return [{ imageUrl }];
    },
    [uploadImagesMutation],
  );

  if (isCompleted) {
    //   TODO 완료 페이지
    return <>완료</>;
  }

  return (
    <>
      <Header leftExtras={<BackButton />} />
      <StyledEntityForm onSubmit={handleSubmit} showDebug={false}>
        <BeerSuggestLayout title={`등록할 맥주의 정보를\n입력해 주세요`}>
          <StyledFieldsWrapper>
            <MultiImageUploadField maxLength={2} name="images" uploadCallback={handleImageUpload} />
            <TextField name="name" required placeholder="맥주의 이름은 무엇인가요?" />
          </StyledFieldsWrapper>
        </BeerSuggestLayout>
        <StyledFormSubmitButton htmlType="submit" type="primary" width="large" autoDisabled>
          입력완료
        </StyledFormSubmitButton>
      </StyledEntityForm>
    </>
  );
};

export default BeerSuggestPage;

const StyledEntityForm = styled(EntityForm)`
  display: flex;
  flex-direction: column;
  min-height: ${`calc(100vh - ${HEADER_HEIGHT}px)`};
`;

const StyledFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 37px 0 66px;

  > *:last-child {
    margin-top: 66px;
  }
`;

const StyledFormSubmitButton = styled(FormSubmitButton)`
  margin: auto auto 22px;
`;
