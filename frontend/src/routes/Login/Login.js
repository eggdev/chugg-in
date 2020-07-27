import React, { useState } from "react";

import { View } from "react-native";
const Login = () => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const handleSignin = () => {
    console.log("here");
  };

  return <View></View>;
};

export default Login;
