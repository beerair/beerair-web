import styled from '@emotion/styled';
import React, { useCallback, useMemo } from 'react';
import { FieldValues } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { useGetFlavors } from '@/apis/flavors';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import Button from '@/components/Button';
import Emoji from '@/components/Emoji';
import EntityForm from '@/components/EntityForm';
import MultiSelectField from '@/components/formFields/MultiSelectField';
import FormSubmitButton from '@/components/FormSubmitButton';
import Icon from '@/components/Icon';
import { SwiperLayoutChildProps } from '@/components/layouts/SwiperLayout';
import { MOCK_FLAVORS as flavors } from '@/constants/dummy';
import $reviewForm from '@/recoil/atoms/reviewForm';
import { IFeelStatus } from '@/types';

interface RecordSecondStepContainerProps extends SwiperLayoutChildProps {
  beerName: string;
  className?: string;
  defaultFlavorValue?: { id: number }[];
}

const ReviewFlavorsContainer: React.FC<RecordSecondStepContainerProps> = ({
  defaultFlavorValue,
  beerName,
  className,
  onMovePrev,
  onMoveNext,
}) => {
  // @TODO: API 정상 호출되면 Mock data 제거
  // const { data: flavors } = useGetFlavors();
  const [{ feelStatus }, setRecordForm] = useRecoilState($reviewForm);

  const flavorOptions = useMemo(
    () =>
      flavors?.map((flavor) => ({
        value: flavor.id,
        label: flavor.content,
        key: flavor.id,
      })) || [],
    [flavors],
  );

  const handleSubmit = useCallback(
    (data: FieldValues) => {
      setRecordForm((prev) => ({ ...prev, ...data }));
      onMoveNext?.();
    },
    [setRecordForm, onMoveNext],
  );

  return (
    <StyledReviewFlavorsContainer className={className}>
      <EntityForm
        onSubmit={handleSubmit}
        defaultValues={{ flavorIds: defaultFlavorValue?.map((flavor) => flavor.id) }}
        showDebug={false}
      >
        <h2>{'맥주 맛은 어땠나요?'}</h2>
        <p className="body-2">{beerName}</p>
        <p className="body-5">{'최대 3개까지 선택이 가능해요!'}</p>
        <MultiSelectField
          name="flavorIds"
          height="calc(100vh - 295px)"
          maxLength={3}
          options={flavorOptions}
          required
        />
        <BottomFloatingButtonArea className="record-floating-area">
          <Button
            type="primary"
            line
            onClick={onMovePrev}
            leftAddon={<Icon name="ArrowLeft" />}
            iconMargin={4}
          >
            {feelStatus ? <Emoji feel={feelStatus as IFeelStatus} size={20} /> : '이전'}
          </Button>
          <FormSubmitButton
            type="primary"
            htmlType="submit"
            rightAddon={<Icon name="ChevronRight" />}
            iconMargin={4}
            autoDisabled
          >
            다음
          </FormSubmitButton>
        </BottomFloatingButtonArea>
      </EntityForm>
    </StyledReviewFlavorsContainer>
  );
};

export default ReviewFlavorsContainer;

const StyledReviewFlavorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  h2 {
    ${({ theme }) => theme.fonts.H2}
    text-align: center;
    margin-bottom: 10px;
  }

  p.body-2 {
    ${({ theme }) => theme.fonts.Body2}
    color: ${({ theme }) => theme.semanticColor.secondary};
    text-align: center;
    margin-bottom: 10px;
  }

  p.body-5 {
    ${({ theme }) => theme.fonts.Body5}
    color: ${({ theme }) => theme.color.whiteOpacity65};
    text-align: center;
    margin-bottom: 16px;
  }

  & .record-floating-area {
    left: 100vw;
    justify-content: space-between;
    padding: 0 20px;

    @media (min-width: 768px) {
      left: 768px;
    }
  }

  & .button-inner {
    display: flex;
    align-items: center;
  }
`;
