import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

function Button({
  backgroundColor,
  width,
  color,
  style,
  text,
  textStyle,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        tw`p-3 my-5 h-12 mx-auto rounded justify-center items-center`,
        { backgroundColor: backgroundColor, width: width, color: color },
        style,
      ]}
    >
      <Text
        style={[
          tw`font-bold text-lg text-white`,
          { textTransform: "capitalize", textStyle },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default Button;
