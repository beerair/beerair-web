import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const request = <T>(param: AxiosRequestConfig) => {
  return axios({
    // TODO: 환경변수로 관리
    baseURL: 'https://api.beerair.kr',
    ...param,
    headers: {
      ...param.headers,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAIWNzQrCMBAG32XPRZo0bUlPIvRmEXo1Ipt0xaD9IWlEKX13Q8Gzxx2-mV3ABw0V3KTWTJqUi4yJnDSWrDOcENNOGGQZJDAFN42e4hiNIe8jCp5cvBcFtlNQqb8ZBYkC6tE-t3mH7oHDLOV-wBe5nRl7BWsMY5jvo7OzJR_75_jgRz6b2J6O9bWpm0PdRuESDYszVKwoRJ7nPCsSoPe0gaJMecnT9QtBwel06gAAAA.4RtOtRtTj01Rd4forISWK0lstmB9UzN-qw2UsPNNHIE`,
    },
  }).then((response: AxiosResponse<T>) => response.data);
};

export default request;
