import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Appbar } from "react-native-paper";
import { Router, Route, Link } from "./react-router";

import Home from "./routes/Home";
import About from "./routes/About";

const App = () => (
  <Router>
    <Appbar.Header></Appbar.Header>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/about">
          <Text>About</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </View>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default App;
