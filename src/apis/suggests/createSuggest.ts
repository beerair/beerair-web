import { useMutation } from 'react-query';

import request from '@/commons/axios';
import { IBaseResponse } from '@/types';
import { ISuggest } from '@/types/suggests';

interface ICreateSuggestPayload {
  images?: {
    beerImage1?: string;
    beerImage2?: string;
  };
  name: string;
}
interface ICreateSuggestResponseData extends IBaseResponse<ISuggest> {}

/**
 * 맥주 등록 요청
 */
export const createSuggest = async (payload: ICreateSuggestPayload) => {
  const res = await request<ICreateSuggestResponseData>({
    method: 'post',
    url: '/api/v1/suggests',
    data: payload,
  });

  return res.data;
};

export const useCreateSuggest = () => {
  return useMutation(createSuggest);
};
