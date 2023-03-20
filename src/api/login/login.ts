import { ApiPath } from '@/constants/api';
import { LoginRequestBody } from '@/models/api/login';
import { axiosClient } from '@/utils/axiosClient';

export const postLogin = async (
  path: ApiPath,
  requestBody: LoginRequestBody
) => {
  await axiosClient.post(path, requestBody);
};
