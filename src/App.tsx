import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import { Home } from "@/";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello React Router</h1>
    </div>
  );
};

export default App;
