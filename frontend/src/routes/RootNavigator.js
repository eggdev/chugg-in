import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import Login from "./Login/Login";
import BottomTabs from "./BottomTabs/BottomTabs";
import IndividualGame from "./IndividualGame/IndividualGame";

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{ headerTitle: "Chugg.In" }}
      />
      <Stack.Screen name="Game" component={IndividualGame} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
