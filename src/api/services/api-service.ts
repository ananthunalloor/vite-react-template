import axios, { AxiosRequestConfig } from 'axios';

import response, { Response } from './request-helpers';

export const BASE_URL = 'http://localhost:3000/api/';

export const apiService = <RequestType, ResponseType, QConfig>(
  defaultConfig?: AxiosRequestConfig
): Response<RequestType, ResponseType, QConfig> => {
  const instance = axios.create();

  instance.defaults.baseURL = BASE_URL;
  instance.defaults.headers.common['Content-Type'] = 'application/json';

  return response<RequestType, ResponseType, QConfig>(instance, defaultConfig);
};
