import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type AddFileRequest, type AddFileResponse } from './types';

export const addFile = async (
  data: AddFileRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<AddFileResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: '/api/files/addfile',
    baseUrl,
    method: HTTPMethods.POST,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...headers
    },
    data
  });
};
