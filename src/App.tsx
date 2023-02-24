import { Route } from "@/components/Route";

import { authContext } from "@/context/authContext";

import "./App.scss";

const App = () => {
  return (
    <authContext.Provider value="">
      <div className="App">
        <Route />
      </div>
    </authContext.Provider>
  );
};

export default App;
