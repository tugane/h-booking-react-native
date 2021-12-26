import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

const Itemseparetor = ({ style }) => {
  return (
    <View style={[styles.separator, style]}>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    padding: 10,
  },
  line: {
    borderWidth: 0.4,
    borderColor: colors.midMedium,
    borderRadius: 20,
  },
});

export default Itemseparetor;
