import { useMutation } from 'react-query';

import request from '@/commons/axios';
import { IBaseResponse, IImage } from '@/types';

interface IUploadImageResponseData extends IBaseResponse<IImage> {}

/**
 * 이미지 업로드
 */

export const uploadImage = async (image: string) => {
  const res = await request<IUploadImageResponseData>({
    method: 'post',
    url: '/api/v1/images',
    data: image,
  });

  return res.data;
};

export const useUploadImage = () => {
  return useMutation(uploadImage);
};
