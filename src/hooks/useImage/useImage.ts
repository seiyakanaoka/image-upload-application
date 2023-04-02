import { getImages as _getImage, postImage } from '@/api/image/image';
import { API_PATH_IMAGE } from '@/constants/api/image';
import { ImageResponse } from '@/models/api/image';

interface UseImage {
  getImage: () => Promise<Array<ImageResponse>>;
  uploadImage: (image: Blob) => Promise<void>;
}

export const useImage = (): UseImage => {
  const getImage = async () => {
    const response = await _getImage(API_PATH_IMAGE.images);
    return response;
  };

  const uploadImage = async (image: Blob) => {
    await postImage(API_PATH_IMAGE.image, image);
  };

  return { getImage, uploadImage };
};
