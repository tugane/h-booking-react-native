import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import colors from "../../config/colors";

const Gobackbutton = ({
  onPress,
  style,
  color = `${colors.light}`,
  size = 30,
  name = "arrow-left",
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <MaterialCommunityIcons color={color} name={name} size={size} />
    </TouchableOpacity>
  );
};

export default Gobackbutton;
