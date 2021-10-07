import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import colors from "../config/colors";
import HotelRoomsGallery from "../screens/HotelRoomsGallery";
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

  const sectionChange = (item) => {};

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
          <View
            style={[
              tw`shadow bg-gray-100`,
              {
                width: roomItemWidth,
                marginRight: SPACING,
                padding: 10,
                borderRadius: 12,
              },
            ]}
          >
            <TouchableOpacity onPress={() => changeActiveIndex(index)}>
              <Image
                style={[
                  tw`h-44`,
                  {
                    width: "100%",
                    borderRadius: 12,
                  },
                ]}
                source={item.imageUrl}
              />
              <Text
                style={{
                  marginVertical: 5,
                  fontSize: 15,
                  color: colors.medium,
                }}
                numberOfLines={1}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
            <View style={tw`w-full flex-row justify-between`}>
              <View style={tw`w-4/12 mt-3`}>
                <Text style={tw`text-base text-gray-400`}>Start at</Text>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-2xl mr-2 text-black font-bold`}>
                    ${item.price}
                  </Text>
                  <Text style={tw`text-base text-gray-400`}>/night</Text>
                </View>
              </View>
              <Button
                style={tw`w-6/12 text-white mb-0 mr-0`}
                backgroundColor={colors.primary}
                text="Book"
              />
            </View>
          </View>
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
