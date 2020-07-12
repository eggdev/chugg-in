import React, { useState } from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const Header = () => {
  return (
    <>
      <Appbar.Header style={styles.fixed}>
        <Appbar.Content title="chugg.in" />
      </Appbar.Header>
      <Appbar.Header />
    </>
  );
};

const styles = StyleSheet.create({
  fixed: {
    position: "fixed",
    width: "100%",
    top: "0",
    left: "0",
    zIndex: 10,
  },
});

export default Header;
