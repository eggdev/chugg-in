import React from "react";
import Header from "./components/Header/Header";
import BottomNav from "./components/BottomNav/BottomNav";
import { Router } from "./react-router";

import Home from "./routes/Home";
import About from "./routes/About";

const App = () => {
  return (
    <Router>
      <Header />
      <BottomNav Home={Home} About={About} />
    </Router>
  );
};

export default App;
