import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { height, width } = Dimensions.get("screen");
const IMAGE_SIZE = 80;
const SPACING = 10;
function HotelRoomsGallery({ images, onClose, initialActiveIndex }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const topRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {}, []);

  const scrollToActiveIndex = (index) => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  return (
    <Screen>
      <View style={{ backgroundColor: colors.black, flex: 1 }}>
        <TouchableOpacity
          onPress={onClose}
          style={{
            borderRadius: 12,
            backgroundColor: colors.medium,
            opacity: 0.7,
            position: "absolute",
            zIndex: 1,
            padding: 10,
            margin: 10,
          }}
        >
          <MaterialCommunityIcons color={colors.light} name="close" size={30} />
        </TouchableOpacity>
        <FlatList
          ref={topRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={images}
          keyExtractor={(item) => item.id.toString()}
          onMomentumScrollEnd={(e) => {
            scrollToActiveIndex(
              Math.floor(e.nativeEvent.contentOffset.x / width)
            );
          }}
          renderItem={({ item }) => (
            <View style={{ width, height }}>
              <Image
                style={{ height: "100%", width: "100%" }}
                source={item.imageUrl}
              />
            </View>
          )}
        />
        <FlatList
          ref={thumbRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={images}
          keyExtractor={(item) => item.id.toString()}
          style={{ position: "absolute", bottom: IMAGE_SIZE }}
          contentContainerStyle={{ paddingHorizontal: SPACING }}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                style={{
                  height: IMAGE_SIZE,
                  width: IMAGE_SIZE,
                  borderRadius: 12,
                  marginRight: SPACING,
                  borderWidth: 4,
                  borderColor:
                    activeIndex === index
                      ? colors.secondary
                      : colors.transparent,
                }}
                source={item.imageUrl}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default HotelRoomsGallery;
