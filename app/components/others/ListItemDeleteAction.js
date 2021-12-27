import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const SPACING = 20;

const Listitemdeleteaction = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons
        color={colors.danger}
        name="trash-can-outline"
        size={40}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: SPACING * 3,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {},
});

export default Listitemdeleteaction;
