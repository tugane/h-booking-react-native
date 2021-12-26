import React, { useRef, useState, forwardRef } from "react";
import { Dimensions, FlatList, Modal, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import SectionHeader from "../header/SectionHeader";
import Room from "./Room";
import RoomsGallery from "./RoomsGallery";
const SPACING = 10;
const screen = Dimensions.get("screen");

function Rooms({ route }, ref) {
  const item = route.params.item;
  const [activeIndex, setActiveIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const thumbRef = useRef();

  const [roomItemWidth, setRoomItemWidth] = useState(screen.width - 120);

  const changeActiveIndex = (index) => {
    setActiveIndex(index);
    setShowGallery(true);
    thumbRef?.current?.scrollToIndex({
      index: index,
      animated: true,
    });
  };

  return (
    <View ref={ref} style={tw`px-4 mb-4`}>
      <SectionHeader title="Rooms" style={tw`my-4`} />
      <FlatList
        ref={thumbRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={item.rooms}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Room
            item={item}
            onImagePress={() => changeActiveIndex(index)}
            onBook={(item) => {
              console.log(item);
            }}
            roomItemWidth={roomItemWidth}
            SPACING={SPACING}
          />
        )}
      />
      <Modal visible={showGallery}>
        <RoomsGallery
          initialActiveIndex={activeIndex}
          onSetActiveIndex={(index) => changeActiveIndex(index)}
          onClose={() => setShowGallery(false)}
          rooms={item.rooms}
        />
      </Modal>
    </View>
  );
}

export default forwardRef(Rooms);
