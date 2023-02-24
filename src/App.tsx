import { Route } from "@/components/Route";

import { useCookie } from "@/hooks/useCookie";

import { AuthContext } from "@/context/authContext";

import "./App.scss";

const App = () => {
  const { getCookie } = useCookie();

  const authCookie = getCookie("userSession");

  return (
    <AuthContext.Provider value={authCookie}>
      <div className="App">
        <Route />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
