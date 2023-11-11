import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type GetActionsRequest, type GetActionsResponse } from './types';

export const getActions = async (
  data: GetActionsRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<GetActionsResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: `/api/cams/get/${data.cam_id}/actions`,
    baseUrl,
    method: HTTPMethods.GET,
    headers,
    data
  });
};
