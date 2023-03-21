import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './User.module.scss';

import { PAGES_ROUTE } from '@/constants/common/route';

const User: FC = () => {
  const navigate = useNavigate();

  const handleClickRouterImage = () => {
    navigate(PAGES_ROUTE.IMAGE);
  };

  return (
    <div className={style['user-page']}>
      <div className={style['image-content']}>
        <div className={style['image']}></div>
        <div className={style['image']}></div>
        <div className={style['image']}></div>
        <div className={style['image']}></div>
        <div className={style['image']}></div>
        <div className={style['image']}></div>
      </div>
      <button onClick={handleClickRouterImage} className={style['action']}>
        投稿
      </button>
    </div>
  );
};

export default User;
