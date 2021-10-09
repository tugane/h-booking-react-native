import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
const Favoratebutton = ({
  style,
  size = 30,
  name = "bookmark-outline",
  favoratedName = "bookmark",
  color = `${colors.yellow}`,
}) => {
  const [favorate, setFavorate] = useState(false);

  const handleOnPress = () => {
    return setFavorate(!favorate);
  };

  return (
    <TouchableOpacity onPress={() => handleOnPress()} style={[style]}>
      <MaterialCommunityIcons
        color={color}
        name={favorate ? favoratedName : name}
        size={size}
      />
    </TouchableOpacity>
  );
};

export default Favoratebutton;
