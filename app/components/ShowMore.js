import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const Showmore = ({ onPress, toggled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.light,
        borderRadius: 15,
        padding: 5,
        alignSelf: "flex-end",
        flexDirection: "row",
      }}
    >
      <Text>show {toggled ? "less" : "more"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Showmore;
