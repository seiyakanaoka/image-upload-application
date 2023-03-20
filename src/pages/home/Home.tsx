import { FC } from 'react';

import style from './Home.module.scss';

const Home: FC = () => {
  return (
    <div className={style['home-page']}>
      <button className={style['action']}>画像を投稿する</button>
    </div>
  );
};

export default Home;
