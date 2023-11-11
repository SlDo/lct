import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type GetFileActionsRequest, type GetFileActionsResponse } from './types';

export const getFileActions = async (
  data: GetFileActionsRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<GetFileActionsResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: `/api/files/getfile/${data.file_id}/actions`,
    baseUrl,
    method: HTTPMethods.GET,
    headers,
    data
  });
};
