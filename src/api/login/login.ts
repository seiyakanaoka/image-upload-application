import { ApiPath } from '@/constants/api';
import { LoginRequestBody, LoginResponse } from '@/models/api/login';
import { axiosClient } from '@/utils/axiosClient';

export const postLogin = async (
  path: ApiPath,
  requestBody: LoginRequestBody
): Promise<LoginResponse> => {
  const response = await axiosClient.post(path, requestBody);
  return response.data;
};
