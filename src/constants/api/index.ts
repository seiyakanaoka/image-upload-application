import { API_PATH_IMAGE, ApiPathImage } from './image';
import { API_PATH_LOGIN, ApiPathLogin } from './login';

export * from './login';

export const API_PATH = {
  ...API_PATH_LOGIN,
  ...API_PATH_IMAGE,
} as const;

export type ApiPath = ApiPathLogin | ApiPathImage;
