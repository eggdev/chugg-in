import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Login from './Login/Login';

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: 'Chugg.In' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
