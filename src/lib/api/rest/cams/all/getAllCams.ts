import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type GetAllCamsRequest, type GetAllCamsResponse } from './types';

export const getAllCams = async (
  data?: GetAllCamsRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<GetAllCamsResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: '/api/cams/all',
    baseUrl,
    method: HTTPMethods.GET,
    headers
  });
};
