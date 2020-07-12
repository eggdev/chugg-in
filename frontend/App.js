import React from "react";
import Header from "./src/components/Header/Header";
import { Router } from "./react-router";

import Home from "./src/routes/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
};

export default App;
