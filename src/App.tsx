import { Route } from '@/components/Route';
import { COOKIE_KEY } from '@/constants/cookie';
import { AuthContext } from '@/context/authContext';
import { useCookie } from '@/hooks/useCookie';

import './App.scss';

const App = () => {
  const { getCookie } = useCookie();

  const authCookie = getCookie(COOKIE_KEY.AUTH);

  return (
    <AuthContext.Provider value={authCookie}>
      <div className="App">
        <Route />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
