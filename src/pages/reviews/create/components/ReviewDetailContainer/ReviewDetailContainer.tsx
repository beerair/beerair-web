import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo } from 'react';
import { FieldValues } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';

import { useGetFlavors } from '@/apis/flavors';
import { ICreateReviewPayload, postReview } from '@/apis/review';
import { uploadImage } from '@/apis/upload/uploadImage';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import { BOTTOM_FLOATING_BUTTON_AREA_HEIGHT } from '@/components/BottomFloatingButtonArea/BottomFloatingButtonArea';
import Button, { ButtonCount } from '@/components/Button';
import EntityForm from '@/components/EntityForm';
import SelectField from '@/components/formFields/SwitchField';
import TextAreaField from '@/components/formFields/TextAreaField';
import FormSubmitButton from '@/components/FormSubmitButton';
import Icon from '@/components/Icon';
import ImageUploadField from '@/components/ImageUploadField';
import { SwiperLayoutChildProps } from '@/components/layouts/SwiperLayout';
import $reviewForm from '@/recoil/atoms/reviewForm';
import { IBeer, IReview } from '@/types';

// @todo: 리뷰 티켓 Container에서 가져오기
export const NEW_TYPE = 'new';

interface RecordThirdStepContainerProps extends SwiperLayoutChildProps {
  beer: IBeer;
  review?: IReview;
  className?: string;
}

const ReviewDetailContainer: React.FC<RecordThirdStepContainerProps> = ({
  beer,
  review,
  onMovePrev,
  onMoveNext,
}) => {
  const router = useRouter();
  const reviewForm = useRecoilValue($reviewForm);
  const { data: flavors } = useGetFlavors();
  const { mutateAsync: uploadImageMutation } = useMutation(uploadImage);
  const { mutateAsync: createReviewMutation } = useMutation(postReview);
  // const { mutateAsync: updateRecordMutation } = useMutation(updateRecord, {
  //   onSuccess: () => {
  //     router.back();
  //   },
  // });

  const { flavorIds: selectedFlavors } = reviewForm;

  const defaultValues = useMemo(
    () => ({
      content: review?.content,
      //isPublic: review?.isPublic || true,
      imageUrl: review?.imageUrl,
    }),
    [review],
  );

  const handleImageUpload = useCallback(
    async (image: FormData) => {
      const { imageUrl } = await uploadImageMutation(image);

      return imageUrl;
    },
    [uploadImageMutation],
  );

  const handleCreateSubmit = useCallback(
    (data: FieldValues) => {
      createReviewMutation(
        {
          ...reviewForm,
          ...data,
          beerId: beer.id,
        } as ICreateReviewPayload,
        { onSuccess: (_data) => router.push(`/record/ticket/${_data.id}?type=${NEW_TYPE}`) },
      );
    },
    [createReviewMutation, reviewForm, beer.id, router],
  );

  // const handleUpdateSubmit = useCallback(
  //   (data: FieldValues) => {
  //     if (!review) {
  //       return;
  //     }
  //
  //     updateRecordMutation(
  //       {
  //         ...recordForm,
  //         ...data,
  //         recordId: review.id,
  //       } as IUpdateRecordPayload,
  //       { onSuccess: () => router.back() },
  //     );
  //   },
  //   [updateRecordMutation, recordForm, review, router],
  // );

  const beforeText =
    selectedFlavors?.[0] &&
    flavors?.find((flavorStatus) => flavorStatus.id === selectedFlavors?.[0])?.content;

  return (
    <StyledEntityForm
      // onSubmit={!review ? handleCreateSubmit : handleUpdateSubmit}
      onSubmit={handleCreateSubmit}
      defaultValues={defaultValues}
      showDebug={false}
    >
      <StyledWrapper>
        <h2>{'당신만의 맥주 이야기도 들려주세요'}</h2>
        <p className="body-1">{beer.korName}</p>
        <ImageUploadField
          name="imageUrl"
          beer={beer}
          uploadCallback={handleImageUpload}
          defaultBackground={review?.imageUrl}
        />
        <div className="switch-wrapper">
          <label>{'맥주 여행 소감 공개 여부'}</label>
          <SelectField name="isPublic" />
        </div>
        <div className="default-padding">
          <TextAreaField
            name="content"
            maxHeight="calc(100vh - 391px)"
            height="230px"
            placeholder={`이번 맥주 여행은 어떠셨나요?\n맥주를 마실 때 맛이나 후기를 적어도 좋아요.\n혹은 분위기, 상황은 어땠는지 추억을 남겨보세요!`}
            required
          />
        </div>
      </StyledWrapper>
      <StyledBottomFloatingButtonArea>
        <Button
          type="primary"
          line
          onClick={onMovePrev}
          leftAddon={<Icon name="ArrowLeft" />}
          iconMargin={4}
          count={selectedFlavors?.length as ButtonCount | undefined}
          maxWidth="44vw"
        >
          {beforeText || '이전'}
        </Button>
        <FormSubmitButton
          type="primary"
          htmlType="submit"
          onClick={onMoveNext}
          rightAddon={<Icon name="ChevronRight" />}
          iconMargin={4}
          autoDisabled
        >
          완료
        </FormSubmitButton>
      </StyledBottomFloatingButtonArea>
    </StyledEntityForm>
  );
};

export default ReviewDetailContainer;

const StyledEntityForm = styled(EntityForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledWrapper = styled.div`
  padding-bottom: ${BOTTOM_FLOATING_BUTTON_AREA_HEIGHT}px;
  overflow-y: auto;

  h2 {
    ${({ theme }) => theme.fonts.H2}
    text-align: center;
    margin-bottom: 10px;
  }

  & > p.body-1 {
    ${({ theme }) => theme.fonts.Body2}
    color: ${({ theme }) => theme.semanticColor.secondary};
    text-align: center;
    margin-bottom: 40px;
  }

  & > span.body-1 {
    ${({ theme }) => theme.fonts.Body2}
    color: ${({ theme }) => theme.color.white};
  }

  & > .switch-wrapper {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > label {
      ${({ theme }) => theme.fonts.Body1}
    }
  }

  & > .default-padding {
    padding: 0 20px;
  }
`;

const StyledBottomFloatingButtonArea = styled(BottomFloatingButtonArea)`
  left: 200vw;
  justify-content: space-between;
  padding: 0 20px;

  @media (min-width: 768px) {
    left: 1536px;
  }
`;
