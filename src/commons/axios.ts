import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const request = <T>(param: AxiosRequestConfig) => {
  return axios({
    // TODO: 환경변수로 관리
    baseURL: 'https://api.beerair.kr',
    ...param,
    headers: {
      ...param.headers,
    },
  }).then((response: AxiosResponse<T>) => response.data);
};

export default request;
