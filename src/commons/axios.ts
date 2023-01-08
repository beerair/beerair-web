import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

export const BASE_URL: string = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

const request = <T>(param: AxiosRequestConfig) => {
  return axios({
    baseURL: BASE_URL,
    ...param,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'brackets' });
    },
    headers: {
      ...param.headers,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAALWTyW7bMBCG34Vnx6IoWdupaOtLGyCb3VUFQUkji7VICVwCN4bfvTRjN6m7pIf0QEAc_fMNZ9sibStUoGaGSY2jMMVVFad5nmVplbVJStI8ZHVE0ASNVo2DBidmdQ1aO5PVoNx9WyLelKgon8SUaFIiEIz3Xr7uRByR7IVkt6Cm9SD8f2aM4pU1oJ3oyCZRHofRLMOJU9SDlFAbaCgzHkQwIWc4OyN4gfMiTos4-eRZoxpGUIYfWe7e8h4oF2wF3rUzZiyCYD1dszUb6kZOJZigkcGF-PCeBJVRS_Hq42V3VwVXV4v5LF-Ob250lL97fX65eJku3wZcrGgS440706_jysc1nRWVdHk-e6QwxBt37iPtXChPo64ng5Xm5ywlr9eSCfcB0GjKVgpAgFcZZWFyUo_fyFrW60e6e_xJctSq_n8l-MsTnzfWadu4pg20zPbmR998BfZ17pimx9E9VM9f_1I1fvCgt6z3U3zwe7CD4i2H5gT5p-XY7d_BrOkGxQ8z_Xn7YPnm_a4vzud0eTO_dvovTr8fgH9czp3b6Ud4t9pP4J2eM4OK0FGSNMZ5MkGwGZ0hxTEJsTPsvgPaska9YwQAAA.o0mkxuK92JHsMQ36eGbbsFtAJ3Yo4YJooeUer5nUOSc`,
    },
  }).then((response: AxiosResponse<T>) => response.data);
};

export default request;
