import { FC } from 'react';

import style from './Login.module.scss';

const Login: FC = () => {
  return (
    <div className={style['login-page']}>
      <main className={style['main-content']}>
        <div className={style['field-content']}>
          <input className={style['field']} placeholder="Email" />
          <input className={style['field']} placeholder="Password" />
        </div>
        <button className={style['action']}>Login</button>
      </main>
      <p className={style['message']}>forgot password?</p>
    </div>
  );
};

export default Login;
