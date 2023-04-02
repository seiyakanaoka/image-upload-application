import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './User.module.scss';

import { PAGES_ROUTE } from '@/constants/common/route';
import { useImage } from '@/hooks/useImage';

const User: FC = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState<string | undefined>();

  const { getImage } = useImage();

  const handleClickRouterImage = () => {
    navigate(PAGES_ROUTE.IMAGE);
  };

  useEffect(() => {
    const getUrl = async () => {
      const url = await getImage();
      setImage(url);
    };
    getUrl();
  }, []);

  return (
    <div className={style['user-page']}>
      <div className={style['image-content']}>
        <img className={style['image']} src={image} alt="" />
      </div>
      <button onClick={handleClickRouterImage} className={style['action']}>
        投稿
      </button>
    </div>
  );
};

export default User;
