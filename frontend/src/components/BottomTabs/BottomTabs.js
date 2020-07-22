import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import GamesList from "../../routes/GamesList";

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" labeled={false}>
      <Tab.Screen
        name="Home"
        component={GamesList}
        options={{
          tabBarIcon: "home",
        }}
      />
      <Tab.Screen
        name="New"
        component={GamesList}
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
