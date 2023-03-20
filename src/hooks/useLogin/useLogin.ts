import { postLogin } from '@/api/login/login';
import { API_PATH_LOGIN } from '@/constants/api';
import { LoginRequestBody } from '@/models/api/login';

interface UseLogin {
  login: (requestBody: LoginRequestBody) => Promise<void>;
}

export const useLogin = (): UseLogin => {
  const login = async (requestBody: LoginRequestBody): Promise<void> => {
    await postLogin(API_PATH_LOGIN.login, requestBody);
  };

  return { login };
};
