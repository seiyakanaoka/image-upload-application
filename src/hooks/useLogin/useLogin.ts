import { postLogin } from '@/api/login/login';
import { API_PATH_LOGIN } from '@/constants/api';
import { LoginRequestBody, LoginResponse, JwtToken } from '@/models/api/login';

interface UseLogin {
  login: (requestBody: LoginRequestBody) => Promise<JwtToken>;
}

export const useLogin = (): UseLogin => {
  const login = async (requestBody: LoginRequestBody): Promise<JwtToken> => {
    const token: LoginResponse = await postLogin(
      API_PATH_LOGIN.login,
      requestBody
    );
    return token.token;
  };

  return { login };
};
