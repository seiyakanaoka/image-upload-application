import { FC } from 'react';
import { useForm } from 'react-hook-form';

import style from './Login.module.scss';

import { LoginValues } from '@/models/validation/login';

const Login: FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<LoginValues>({ mode: 'onChange' });

  console.log('errors  :  ', errors);

  return (
    <div className={style['login-page']}>
      <main className={style['main-content']}>
        <div className={style['field-content']}>
          <label className={style['content']}>
            <input
              {...register('email', { required: true })}
              className={style['field']}
              placeholder="Email"
            />
            {!!errors.email && (
              <p className={style['message']}>Emailを入力してください</p>
            )}
          </label>
          <label className={style['content']}>
            <input
              {...register('password', { required: true })}
              className={style['field']}
              placeholder="Password"
            />
            {!!errors.password && (
              <p className={style['message']}>パスワードを入力してください</p>
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
