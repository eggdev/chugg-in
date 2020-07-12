import React, { useState } from "react";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";

const Header = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="chugg.in" />
    </Appbar.Header>
  );
};

export default Header;
