import React from "react";
import Header from "./src/components/Header/Header";
import { Router, Route } from "./react-router";
import IndividualGame from "./src/routes/IndividualGame";
import GamesList from "./src/routes/GamesList";

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={GamesList} />
      <Route path="/:name" component={IndividualGame} />
    </Router>
  );
};

export default App;
