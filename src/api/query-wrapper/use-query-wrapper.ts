import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosRequestConfig } from 'axios';

import { apiService } from '../services/api-service';

export enum QueryMethods {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export interface QueryParams<QData, QParams, QConfig> {
  path: string;
  queryKey: string[];
  queryMethod: QueryMethods;
  defaultResponse: QData;
  params?: QParams;
  axiosConfig?: AxiosRequestConfig<QConfig>;
}

export type QError<T> = AxiosError<T>;

export const useQueryWrapper = <QData, QParams, QConfig, QError>({
  path,
  queryKey,
  queryMethod,
  defaultResponse,
  params,
  axiosConfig
}: QueryParams<QData, QParams, QConfig>) => {
  const queryFn = async () => {
    const api = apiService<QParams, QData, QConfig>();
    const response = await api.request({
      url: path,
      method: queryMethod,
      params,
      ...axiosConfig
    });
    return response.data;
  };

  const { data: response, ...rest } = useQuery<QData, QError, QData, string[]>({
    queryKey,
    queryFn
  });

  const data: QData | undefined = response || defaultResponse;

  return { data, ...rest };
};
