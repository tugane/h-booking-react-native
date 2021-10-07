import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { height, width } = Dimensions.get("screen");
const IMAGE_SIZE = 80;
const SPACING = 10;
function HotelRoomsGallery({
  rooms,
  onClose,
  initialActiveIndex,
  onSetActiveIndex,
}) {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const topRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setActiveIndex(initialActiveIndex);
      scrollToActiveIndex(activeIndex);
    }, 500);
  }, []);

  const scrollToActiveIndex = (index) => {
    onSetActiveIndex(index);
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
    <View style={{ backgroundColor: colors.black, flex: 1 }}>
      <TouchableOpacity
        onPress={onClose}
        style={{
          top: IMAGE_SIZE / 2,
          alignSelf: "center",
          position: "absolute",
          borderRadius: 25,
          backgroundColor: colors.medium,
          opacity: 0.7,
          padding: 10,
          margin: 10,
          width: 50,
          zIndex: 2,
        }}
      >
        <MaterialCommunityIcons color={colors.light} name="close" size={30} />
      </TouchableOpacity>
      <View
        style={{
          bottom: IMAGE_SIZE + IMAGE_SIZE,
          zIndex: 2,
          position: "absolute",
          backgroundColor: colors.medium,
          padding: 10,
          borderRadius: 20,
          marginHorizontal: 10,
          alignSelf: "center",
          opacity: 0.8,
        }}
      >
        <Text
          style={{
            color: colors.light,
            fontWeight: "700",
            textAlign: "justify",
            fontSize: 15,
          }}
        >
          {rooms[activeIndex].title}
        </Text>
      </View>
      <FlatList
        ref={topRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={rooms}
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
        data={rooms}
        keyExtractor={(item) => item.id.toString()}
        style={{ position: "absolute", zIndex: 2, bottom: IMAGE_SIZE }}
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
                  activeIndex === index ? colors.secondary : colors.transparent,
              }}
              source={item.imageUrl}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default HotelRoomsGallery;
