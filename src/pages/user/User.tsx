import { FC } from 'react';

import style from './User.module.scss';

const User: FC = () => {
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
      <button className={style['action']}>投稿</button>
    </div>
  );
};

export default User;
