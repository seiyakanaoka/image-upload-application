import { ApiPath } from '@/constants/api';
import { ImageResponse } from '@/models/api/image';
import { axiosClient } from '@/utils/axiosClient';

export const getImages = async (
  path: ApiPath
): Promise<Array<ImageResponse>> => {
  const response = await axiosClient.get(`${path}/user/${1}/images`);
  return response.data;
};

export const postImage = async (path: ApiPath, image: Blob): Promise<void> => {
  const formData = new FormData();
  formData.append('image', image);
  await axiosClient.post(path, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
