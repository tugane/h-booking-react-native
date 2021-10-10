import React from "react";
import { Text, View } from "react-native";
import colors from "../../config/colors";

function SectionHeader({ title, subTitle = null, style }) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        },
        style,
      ]}
    >
      <Text style={{ fontSize: 20, fontWeight: "700", color: colors.medium }}>
        {title}
      </Text>
      <Text style={{ fontSize: 15, fontWeight: "500", color: colors.medium }}>
        {subTitle}
      </Text>
    </View>
  );
}
export default SectionHeader;
