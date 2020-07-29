import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text } from 'react-native';

const Login = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

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
