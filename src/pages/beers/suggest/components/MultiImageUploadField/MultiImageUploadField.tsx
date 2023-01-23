import styled from '@emotion/styled';
import { isNil } from 'lodash';
import { useCallback, useRef } from 'react';
import { Controller, useFormContext, ControllerProps } from 'react-hook-form';

import Icon from '@/components/Icon';

import UploadButton from './UploadButton';

interface MultiImageUploadFieldProps {
  maxLength?: number;
  name: string;
  className?: string;
  required?: boolean;
  uploadFieldName?: string;
  uploadCallback?: (data: FormData) => Promise<
    {
      imageUrl: string;
    }[]
  >;
}

const StyledMultiImageUploadField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 136px;

  .uploaded-images {
    display: flex;
    margin: auto 0 0;
  }

  .uploaded-image {
    position: relative;
    margin: 0 0 0 10px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  .helper-text {
    margin: 20px 0 0;
    ${(p) => p.theme.fonts.Body4};
    color: ${(p) => p.theme.color.grey3};
  }
`;

const MultiImageUploadField: React.FC<MultiImageUploadFieldProps> = ({
  name,
  maxLength = 2,
  required,
  uploadFieldName = 'files',
  uploadCallback,
}) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { control } = useFormContext<Record<string, string[]>>();

  const handleClick = useCallback(() => {
    imageInputRef.current?.click();
  }, []);

  const triggerChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldValue: string[] = [],
    onChange: (...event: any[]) => void,
  ) => {
    if (!e.target.files || !uploadCallback || fieldValue.length >= maxLength) {
      return;
    }

    const newImageFiles = Array.from(e.target.files).slice(0, maxLength - fieldValue.length);

    if (!newImageFiles.every((imageFile) => imageFile.type.startsWith('image/'))) {
      return;
    }

    try {
      const imageFormData = new FormData();
      for (let i = 0; i < newImageFiles.length; i++) {
        imageFormData.append(uploadFieldName, newImageFiles[i]);
      }

      const newImageUrls = (await uploadCallback(imageFormData)).map(({ imageUrl }) => imageUrl);
      if (newImageUrls) {
        onChange([...newImageUrls, ...fieldValue]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveClick =
    (selectedIndex: number, fieldValue: string[], onChange: (...event: any[]) => void) => () => {
      onChange(fieldValue.filter((_, index) => index !== selectedIndex));
    };

  const renderMultiImageUploadField: ControllerProps<Record<string, string[]>>['render'] = ({
    field: { value, onChange },
  }) => {
    return (
      <StyledMultiImageUploadField>
        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(e) => triggerChange(e, value, onChange)}
        />
        <ul className="uploaded-images">
          {(!value || value.length < maxLength) && (
            <UploadButton onClick={handleClick} size={!value?.length ? 'large' : 'small'} />
          )}
          {value?.map((imageUrl, index) => (
            <li key={imageUrl} className="uploaded-image">
              <img src={imageUrl} alt={`업로드한 이미지 ${maxLength}개 중 ${index}번째`} />
              <StyledRemoveButton type="button" onClick={handleRemoveClick(index, value, onChange)}>
                <Icon name="XCircle" size={20} />
              </StyledRemoveButton>
            </li>
          ))}
        </ul>
        {!isNil(maxLength) && (
          <p className="helper-text">사진은 최대 {maxLength}장까지 첨부 할 수 있습니다.</p>
        )}
      </StyledMultiImageUploadField>
    );
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      render={renderMultiImageUploadField}
    />
  );
};

export default MultiImageUploadField;

const StyledRemoveButton = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;

  circle {
    fill: ${(p) => p.theme.semanticColor.primary};
    fill-opacity: 1;
  }
`;
