import { Route } from "@/components/Route";
import { COOKIE_KEY } from "@/constants/cookie";

import { useCookie } from "@/hooks/useCookie";

import { AuthContext } from "@/context/authContext";

import "./App.scss";

const App = () => {
  const { getCookie } = useCookie();

  const authCookie = getCookie(COOKIE_KEY.AUTH);

  console.log("auth : ", authCookie);

  return (
    <AuthContext.Provider value={authCookie}>
      <div className="App">
        <Route />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
