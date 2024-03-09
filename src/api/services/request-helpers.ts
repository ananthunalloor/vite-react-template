import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

export interface Response<RequestType, ResponseType, QConfig> {
  get: <RespType = ResponseType>(
    route: string,
    config?: AxiosRequestConfig<QConfig>
  ) => Promise<AxiosResponse<RespType, QConfig>>;
  post: <ReqType = RequestType, RespType = ResponseType>(
    route: string,
    data?: ReqType,
    config?: AxiosRequestConfig<QConfig>
  ) => Promise<AxiosResponse<RespType, QConfig>>;
  put: <ReqType = RequestType, RespType = ResponseType>(
    route: string,
    data?: ReqType,
    config?: AxiosRequestConfig<QConfig>
  ) => Promise<AxiosResponse<RespType, QConfig>>;
  patch: <ReqType = RequestType, RespType = ResponseType>(
    route: string,
    data?: ReqType,
    config?: AxiosRequestConfig<QConfig>
  ) => Promise<AxiosResponse<RespType, QConfig>>;
  delete: (
    route: string,
    config?: AxiosRequestConfig<QConfig>
  ) => Promise<AxiosResponse<ResponseType, QConfig>>;
  request: (config: AxiosRequestConfig<QConfig>) => Promise<AxiosResponse<ResponseType, QConfig>>;
}

const response = <RequestType, ResponseType, QConfig>(
  instance: AxiosInstance,
  defaultConfig?: AxiosRequestConfig
): Response<RequestType, ResponseType, QConfig> => {
  const get = async <ResponseType>(
    route: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ResponseType, QConfig>> => {
    return instance.get(route, { ...defaultConfig, ...config });
  };

  const post = async <RequestType, ResponseType>(
    route: string,
    data?: RequestType,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ResponseType, QConfig>> => {
    return axios.post(route, data, { ...defaultConfig, ...config });
  };

  const put = async <RequestType, ResponseType>(
    route: string,
    data?: RequestType,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ResponseType, QConfig>> => {
    return axios.put(route, data, { ...defaultConfig, ...config });
  };

  const patch = async <RequestType, ResponseType>(
    route: string,
    data?: RequestType,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ResponseType, QConfig>> => {
    return axios.patch(route, data, { ...defaultConfig, ...config });
  };

  const del = async <ResponseType>(
    route: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ResponseType, QConfig>> => {
    return axios.delete(route, { ...defaultConfig, ...config });
  };

  const request = async <ResponseType, QConfig>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<ResponseType, QConfig>> => {
    return axios.request({ ...defaultConfig, ...config });
  };

  return {
    get,
    post,
    put,
    patch,
    delete: del,
    request
  };
};

export default response;
