import { LoginRequestBody } from '@/models/api/login';
import { axiosClient } from '@/utils/axiosClient';

export const postLogin = async (
  path: string,
  requestBody: LoginRequestBody
) => {
  await axiosClient.post(path, requestBody);
};
