import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import GamesList from "./GamesList";
import IndividualGame from "./IndividualGame";

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={GamesList}
        options={{ headerTitle: "Chugg.In" }}
      />
      <Stack.Screen name="Game" component={IndividualGame} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
