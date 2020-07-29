import React, { useState } from 'react';

import { View, Text } from 'react-native';
const Login = () => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const handleSignin = () => {
    console.log('here');
  };

  return (
    <View>
      <Text>Here</Text>
    </View>
  );
};

export default Login;
