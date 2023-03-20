import { API_PATH_LOGIN, ApiPathLogin } from './login';

export * from './login';

export const API_PATH = {
  ...API_PATH_LOGIN,
} as const;

export type ApiPath = ApiPathLogin;
