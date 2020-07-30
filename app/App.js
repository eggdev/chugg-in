import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/routes/RootNavigator';
import env from './env';

const App = () => {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = env;
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
