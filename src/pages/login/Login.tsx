import { FC } from 'react';
import { useForm } from 'react-hook-form';

import style from './Login.module.scss';

import { LOGIN_VALUES_OPTION } from '@/constants/validation/login';
import { LoginValues } from '@/models/validation/login';

const Login: FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<LoginValues>({ mode: 'onChange' });

  return (
    <div className={style['login-page']}>
      <main className={style['main-content']}>
        <div className={style['field-content']}>
          <label className={style['content']}>
            <input
              {...register('email', LOGIN_VALUES_OPTION.email)}
              className={style['field']}
              placeholder="Email"
            />
            {!!errors.email?.message && (
              <p className={style['message']}>{errors.email.message}</p>
            )}
          </label>
          <label className={style['content']}>
            <input
              {...register('password', LOGIN_VALUES_OPTION.password)}
              className={style['field']}
              placeholder="Password"
            />
            {!!errors.password?.message && (
              <p className={style['message']}>{errors.password.message}</p>
            )}
          </label>
        </div>
        <button className={style['action']}>Login</button>
      </main>
      <p className={style['message']}>forgot password?</p>
    </div>
  );
};

export default Login;
