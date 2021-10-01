import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import colors from "../config/colors";

function HorizontalItem({
  onPress,
  itemTextStles,
  activeItemId,
  item,
  itemStyles,
  activeItemBackgroundColor = colors.primary,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        itemStyles,
        activeItemId == item.id
          ? { backgroundColor: activeItemBackgroundColor }
          : null,
      ]}
    >
      <Text
        style={[
          tw`text-xl`,
          itemTextStles,
          activeItemId == item.id ? { color: colors.light } : null,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default HorizontalItem;
