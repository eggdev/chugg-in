import React, { useState } from "react";
import { BottomNavigation, Text } from "react-native-paper";

const BottomNav = ({ Home, About }) => {
  const [routes] = useState([
    { key: "about", title: "About", icon: "information" },
    { key: "home", title: "Home", icon: "home-variant" },
  ]);
  const [index, setIndex] = useState(routes.length - 1);

  const renderScene = BottomNavigation.SceneMap({
    about: About,
    home: Home,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
