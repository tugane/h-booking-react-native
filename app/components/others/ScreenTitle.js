import React from "react";
import { StyleSheet, Text } from "react-native";

const Screentitle = ({ style, title }) => {
  return <Text style={[styles.header, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: "700",
    textTransform: "capitalize",
  },
});

export default Screentitle;
