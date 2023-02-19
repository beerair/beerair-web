import { useMutation, useQueryClient } from 'react-query';

import { createReview } from '@/apis/review';
import request from '@/commons/axios';
import { queryKeyFactory } from '@/commons/queryKeyFactory';
import { IBaseResponse, IImage } from '@/types';

interface IUploadImageResponseData extends IBaseResponse<IImage> {}

/**
 * 이미지 업로드
 */

export const uploadImage = async (image: FormData) => {
  const res = await request<IUploadImageResponseData>({
    method: 'post',
    url: '/api/v1/images',
    data: image,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};

export const useUploadImageMutation = () => {
  const cache = useQueryClient();

  const { mutateAsync: uploadImageMutation, ...rest } = useMutation(uploadImage, {
    onSuccess: async () => {
      await cache.invalidateQueries(queryKeyFactory.UPLOAD_IMAGE());
    },
  });

  return {
    uploadImage: uploadImageMutation,
    ...rest,
  };
};
