import { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import style from './Login.module.scss';

import { PAGES_ROUTE } from '@/constants/common/route';
import { JWT_TOKEN_COOKIE } from '@/constants/cookie/cookie';
import { LOGIN_VALUES_OPTION } from '@/constants/validation/login';
import { useCookie } from '@/hooks/common/useCookie';
import { useLogin } from '@/hooks/useLogin';
import { LoginValues } from '@/models/validation/login';

const Login: FC = () => {
  const navigate = useNavigate();

  const { login } = useLogin();

  const { getCookie, setCookie } = useCookie();

  const tokenCookie = getCookie(JWT_TOKEN_COOKIE);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<LoginValues>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<LoginValues> = async (data) => {
    const token = await login(data);
    console.log('token : ', token);
    setCookie(JWT_TOKEN_COOKIE, token);
    navigate(PAGES_ROUTE.LOGIN);
  };

  useEffect(() => {
    if (!!tokenCookie) {
      navigate(PAGES_ROUTE.HOME);
    }
  }, [tokenCookie]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style['login-page']}>
      <div className={style['content']}>
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
          <button disabled={!isValid} className={style['action']}>
            Login
          </button>
        </main>
        <p className={style['message']}>forgot password?</p>
      </div>
    </form>
  );
};

export default Login;
