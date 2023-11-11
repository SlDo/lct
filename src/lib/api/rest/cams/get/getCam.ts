import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type GetCamRequest, type GetCamResponse } from './types';

export const getCam = async (
  data: GetCamRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<GetCamResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: `/api/cams/get/${data.cam_id}`,
    baseUrl,
    method: HTTPMethods.GET,
    headers
  });
};
