import React, { useRef, useState } from "react";
import { Dimensions, FlatList, Modal, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import SectionHeader from "./SectionHeader";
import HotelRoomsGallery from "../screens/HotelRoomsGallery";
import Room from "./rooms/Room";
const SPACING = 10;
const screen = Dimensions.get("screen");

function HotelRooms({ route }) {
  const hotel = route.params.hotel;
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
    <View style={tw`px-4 mb-4`}>
      <SectionHeader title="Rooms" style={tw`my-4`} />
      <FlatList
        ref={thumbRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={hotel.rooms}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Room
            item={item}
            onImagePress={() => changeActiveIndex(index)}
            onBook={(item) => console.log(item)}
            roomItemWidth={roomItemWidth}
            SPACING={SPACING}
          />
        )}
      />
      <Modal visible={showGallery}>
        <HotelRoomsGallery
          initialActiveIndex={activeIndex}
          onSetActiveIndex={(index) => changeActiveIndex(index)}
          onClose={() => setShowGallery(false)}
          rooms={hotel.rooms}
        />
      </Modal>
    </View>
  );
}

export default HotelRooms;
