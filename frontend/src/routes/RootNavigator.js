import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import BottomTabs from "../components/BottomTabs/BottomTabs";
import IndividualGame from "./IndividualGame";

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
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
