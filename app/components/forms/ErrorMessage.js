import React from "react";
import { Text } from "react-native";
import colors from "../../config/colors";

const Errormessage = ({ visible, error, checkVisible = `${true}` }) => {
  if (checkVisible) {
    if (!error || !visible) return null;
  } else {
    if (!error) return null;
  }
  return <Text style={{ color: colors.danger }}>{error}</Text>;
};

export default Errormessage;
