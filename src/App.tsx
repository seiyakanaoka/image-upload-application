import { Route } from "@/components/Route";

import { useCookie } from "@/hooks/useCookie";

import { authContext } from "@/context/authContext";

import "./App.scss";

const App = () => {
  const { getCookie } = useCookie();

  const authCookie = getCookie("userSession");

  return (
    <authContext.Provider value={authCookie}>
      <div className="App">
        <Route />
      </div>
    </authContext.Provider>
  );
};

export default App;
