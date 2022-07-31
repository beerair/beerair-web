import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const request = <T>(param: AxiosRequestConfig) => {
  return axios({
    ...param,
    headers: {
      ...param.headers,
    },
  }).then((response: AxiosResponse<T>) => response.data);
};

export default request;
