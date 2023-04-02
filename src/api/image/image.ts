import { ApiPath } from '@/constants/api';
import { ImageResponse } from '@/models/api/image';
import { axiosClient } from '@/utils/axiosClient';

export const getImages = async (path: ApiPath): Promise<ImageResponse> => {
  const response = await axiosClient.get(path, {
    params: {
      objectKey: 'fish.jpeg',
    },
  });
  return response.data;
};
