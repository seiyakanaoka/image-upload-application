// import { getImages as _getImage } from '@/api/image/image';
// import { API_PATH_IMAGE } from '@/constants/api/image';

interface UseImage {
  getImage: () => Promise<string>;
}

export const useImage = (): UseImage => {
  const getImage = async () => {
    // const response = await _getImage(API_PATH_IMAGE.image);
    // return response.imageUrl;
    return '';
  };

  return { getImage };
};
