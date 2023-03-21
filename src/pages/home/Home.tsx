import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './Home.module.scss';

import { PAGES_ROUTE } from '@/constants/common/route';

const Home: FC = () => {
  const navigate = useNavigate();

  const handleClickRouterImage = () => {
    navigate(PAGES_ROUTE.IMAGE);
  };

  return (
    <div className={style['home-page']}>
      <button onClick={handleClickRouterImage} className={style['action']}>
        Seiyaさん
      </button>
    </div>
  );
};

export default Home;
