import './App.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PAGES_ROUTE } from '@/constants/common/route';
import { JWT_TOKEN_COOKIE } from '@/constants/cookie/cookie';
import { useCookie } from '@/hooks/common/useCookie';
import Routes from '@/pages/routes/Routes';

const App = () => {
  const navigate = useNavigate();

  const { getCookie } = useCookie();

  const tokenCookie = getCookie(JWT_TOKEN_COOKIE);

  console.log('tokenCookie : ', tokenCookie);

  useEffect(() => {
    if (typeof tokenCookie === 'undefined') {
      console.log('通った');
      navigate(PAGES_ROUTE.LOGIN);
    } else {
      console.log('通った?');
      navigate(PAGES_ROUTE.HOME);
    }
  }, [tokenCookie]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
