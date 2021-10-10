import React from "react";
import { Text, View } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Apptext = ({
  style,
  iconName,
  iconSize = 35,
  iconColor = `${colors.secondary}`,
  textStyle,
  text,
}) => {
  return (
    <View style={[{ flexDirection: "row" }, style]}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      )}
      <Text
        style={[
          {
            marginLeft: iconName && 15,
            color: colors.medium,
            fontSize: 17,
            fontWeight: "500",
          },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default Apptext;
