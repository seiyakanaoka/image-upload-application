import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './User.module.scss';

import { PAGES_ROUTE } from '@/constants/common/route';
import { useImage } from '@/hooks/useImage';
import { ImageResponse } from '@/models/api/image';

const User: FC = () => {
  const navigate = useNavigate();

  const [images, setImages] = useState<Array<ImageResponse>>([]);

  const { getImage } = useImage();

  const handleClickRouterImage = () => {
    navigate(PAGES_ROUTE.IMAGE);
  };

  useEffect(() => {
    const getUrl = async () => {
      const images = await getImage();
      setImages(images);
    };
    getUrl();
  }, []);

  return (
    <div className={style['user-page']}>
      <div className={style['image-content']}>
        {images.map((image, index) => (
          <img
            key={index}
            className={style['image']}
            src={image.imageUrl}
            alt=""
          />
        ))}
      </div>
      <button onClick={handleClickRouterImage} className={style['action']}>
        投稿
      </button>
    </div>
  );
};

export default User;
