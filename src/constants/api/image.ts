export const apiPathImage = '/aws/s3/image';

export const API_PATH_IMAGE = {
  image: '/aws/s3/image',
  images: '/aws/s3',
} as const;

export type ApiPathImage = (typeof API_PATH_IMAGE)[keyof typeof API_PATH_IMAGE];
