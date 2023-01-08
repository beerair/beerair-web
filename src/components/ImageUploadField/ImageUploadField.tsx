import styled from '@emotion/styled';
import React, { useCallback, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { IBeer } from '@/types';

import BeerTicketTitle from '../BeerTicket/BeerTicketTitle';
import Icon from '../Icon';

interface ImageUploadFieldProps {
  beer: IBeer;
  name: string;
  title?: string;
  className?: string;
  required?: boolean;
  uploadFieldName?: string;
  defaultBackground?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadCallback?: (data: any) => Promise<any>;
}

const StyledImageUploadField = styled.div`
  position: relative;

  & > .photo-upload-button {
    border-left: 1px dashed ${({ theme }) => theme.color.white};
    position: absolute;
    width: 120px;
    height: 180px;
    top: 0;
    right: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > .upload-field-title {
      color: ${({ theme }) => theme.color.white};
      margin-top: 8px;
      font-weight: 700;
      font-size: 12px;
    }
  }
`;

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({
  beer,
  name,
  title,
  className,
  required,
  uploadFieldName = 'file',
  defaultBackground,
  uploadCallback,
}) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { control } = useFormContext();

  const handleClick = useCallback(() => {
    imageInputRef.current?.click();
  }, []);

  const triggerChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...event: any[]) => void,
  ) => {
    const imageFile = e.target.files?.[0];

    if (!imageFile || !imageFile.type.startsWith('image/') || !uploadCallback) {
      onChange(e);
      return;
    }
    const imageFormData = new FormData();

    imageFormData.append(uploadFieldName, imageFile);
    const imageUrl = await uploadCallback(imageFormData);

    if (imageUrl) {
      onChange(imageUrl);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      render={({ field }) => (
        <StyledImageUploadField>
          <input
            onChange={(e) => triggerChange(e, field.onChange)}
            type="file"
            accept="image/*"
            ref={imageInputRef}
            className={className}
            hidden
          />
          <BeerTicketTitle beer={beer} background={field.value || defaultBackground} type="form" />
          <div className="photo-upload-button">
            <StyledPhotoIconButton type="button" onClick={handleClick}>
              <Icon name="Photo" size={30} color="white" />
            </StyledPhotoIconButton>
            <span className="upload-field-title">{title}</span>
          </div>
        </StyledImageUploadField>
      )}
    />
  );
};

export default ImageUploadField;

const StyledPhotoIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
`;
