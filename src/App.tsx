import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Route as RoutePage } from "@/components/Route";

import "./App.scss";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RoutePage />
    </div>
  );
};

export default App;
