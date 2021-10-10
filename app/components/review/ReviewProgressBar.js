import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";
import * as Progress from "react-native-progress";

const Reviewprogressbar = ({
  text,
  progress,
  color = `${colors.secondary}`,
}) => {
  return (
    <View style={styles.ProgressBarWrap}>
      <Text style={styles.progressBarText}>{text}</Text>
      <View style={styles.progressWrap}>
        <Progress.Bar
          height={10}
          progress={progress}
          borderWidth={0}
          borderRadius={0}
          color={color}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ProgressBarWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 3,
  },
  progressWrap: {
    width: "65%",
    paddingLeft: 7,
  },
  progressBarText: {
    fontSize: 16,
    width: "35%",
    color: colors.medium,
  },
});
export default Reviewprogressbar;
