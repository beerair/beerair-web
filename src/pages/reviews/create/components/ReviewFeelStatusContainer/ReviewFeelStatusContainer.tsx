import styled from '@emotion/styled';
import { useCallback } from 'react';
import { FieldValues } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import EntityForm from '@/components/EntityForm';
import EmojiRadioField from '@/components/formFields/EmojiRadioField';
import FormSubmitButton from '@/components/FormSubmitButton';
import { SwiperLayoutChildProps } from '@/components/layouts/SwiperLayout';
import $reviewForm from '@/recoil/atoms/reviewForm';

interface ReviewFeelStatusContainerProps extends SwiperLayoutChildProps {
  beerName: string;
  className?: string;
  defaultFeelValue?: number;
}

const ReviewFeelStatusContainer: React.FC<ReviewFeelStatusContainerProps> = ({
  defaultFeelValue,
  beerName,
  className,
  onMoveNext,
}) => {
  const setRecordForm = useSetRecoilState($reviewForm);

  const handleSubmit = useCallback(
    (data: FieldValues) => {
      setRecordForm((prev) => ({ ...prev, ...data }));
      onMoveNext?.();
    },
    [setRecordForm, onMoveNext],
  );

  return (
    <StyledEntityForm
      onSubmit={handleSubmit}
      defaultValues={{ feelStatus: defaultFeelValue || 3 }}
      showDebug={false}
      className={className}
    >
      <StyledTitle>이번 맥주는 어땠나요?</StyledTitle>
      <StyledBeerName>{beerName}</StyledBeerName>
      <StyledEmojiRadioField name="feelStatus" />
      <BottomFloatingButtonArea
        button={
          <FormSubmitButton type="primary" htmlType="submit" width="large" autoDisabled>
            다음
          </FormSubmitButton>
        }
      />
    </StyledEntityForm>
  );
};

export default ReviewFeelStatusContainer;

const StyledEntityForm = styled(EntityForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledTitle = styled.h2`
  ${({ theme }) => theme.fonts.H2}
  text-align: center;
  margin-bottom: 10px;
`;

const StyledBeerName = styled.p`
  ${({ theme }) => theme.fonts.Body2}
  color: ${({ theme }) => theme.semanticColor.secondary};
  text-align: center;
`;

const StyledEmojiRadioField = styled(EmojiRadioField)`
  flex: 1;
  padding: 10vh 0 37px 0;
  overflow-y: auto;
`;
