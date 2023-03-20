export const apiPathLogin = '/login';

export const API_PATH_LOGIN = {
  login: '/login',
} as const;

export type ApiPathLogin = (typeof API_PATH_LOGIN)[keyof typeof API_PATH_LOGIN];
