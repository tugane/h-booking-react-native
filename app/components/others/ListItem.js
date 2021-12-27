import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import colors from "../../config/colors";
const SPACING = 20;
import Swipeable from "react-native-gesture-handler/Swipeable";
const Listitem = ({
  image,
  subTitle,
  title,
  onPress,
  itemContainerStyle,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
        style={itemContainerStyle}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.titleWrap}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {subTitle}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: SPACING / 4,
    borderRadius: SPACING,
  },
  image: {
    height: SPACING * 3,
    width: "15%",
    borderRadius: SPACING / 2,
  },
  titleWrap: {
    paddingHorizontal: SPACING / 2,
    width: "85%",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "600",
  },
  subTitle: {
    fontSize: SPACING - 5,
  },
});

export default Listitem;
