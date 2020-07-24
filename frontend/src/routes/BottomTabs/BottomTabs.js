import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import GamesList from "../GamesList/GamesList";
import CreateGame from "../CreateGame/CreateGame";

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="New" labeled={false}>
      <Tab.Screen
        name="Home"
        component={GamesList}
        options={{
          tabBarIcon: "home",
        }}
      />
      <Tab.Screen
        name="New"
        component={CreateGame}
        options={{
          tabBarIcon: "plus-box",
        }}
      />
      <Tab.Screen
        name="Random"
        component={GamesList}
        options={{
          tabBarIcon: "help-box",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
