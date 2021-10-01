import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import colors from "../config/colors";
import Screen from "../components/Screen";
import HorizontalItems from "../components/HorizontalItems";
import HotelOverview from "../components/HotelOverview";
import HotelInfo from "../components/HotelInfo";
import Button from "../components/Button";
import HotelRoomsGallery from "./HotelRoomsGallery";
import SectionHeader from "../components/SectionHeader";

const items = [
  {
    id: 1,
    name: "Overview",
  },
  {
    id: 2,
    name: "Rooms",
  },
  {
    id: 4,
    name: "Prices",
  },
  {
    id: 3,
    name: "Review",
  },
  {
    id: 5,
    name: "Photos",
  },
];

const images = [
  {
    id: 1,
    imageUrl: require("../assets/rooms/r1.jpg"),
  },
  {
    id: 2,
    imageUrl: require("../assets/rooms/r2.jpg"),
  },
  {
    id: 3,
    imageUrl: require("../assets/rooms/r3.jpg"),
  },
  {
    id: 4,
    imageUrl: require("../assets/rooms/r4.jpg"),
  },
  {
    id: 5,
    imageUrl: require("../assets/rooms/r5.jpg"),
  },
  {
    id: 6,
    imageUrl: require("../assets/rooms/r6.jpg"),
  },
  {
    id: 7,
    imageUrl: require("../assets/rooms/r7.jpg"),
  },
  {
    id: 8,
    imageUrl: require("../assets/rooms/r8.jpg"),
  },
  {
    id: 9,
    imageUrl: require("../assets/rooms/r9.jpg"),
  },
  {
    id: 10,
    imageUrl: require("../assets/rooms/r10.jpg"),
  },
  {
    id: 11,
    imageUrl: require("../assets/rooms/r11.jpg"),
  },
];
const IMAGE_SIZE = 80;
const SPACING = 10;
function HotelDetailsScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const thumbRef = useRef();

  const changeActiveIndex = (index) => {
    setActiveIndex(index);
    setShowGallery(true);
  };

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <HotelInfo navigation={navigation} />
          <View style={tw`-mt-16`}>
            <HorizontalItems
              itemTextStles={tw`text-white`}
              initialActiveItemIndex={0}
              selectedItemBackgroundColor={colors.secondary}
              itemContainerStyle={tw`mb-2 mt-0 pr-3`}
              items={items}
              selectedItem={(item) => console.log(item)}
              itemStyles={[
                tw`ml-4 p-2 rounded`,
                { backgroundColor: colors.medium },
              ]}
            />
            <HotelOverview />
            <View style={tw`px-4 mb-4`}>
              <SectionHeader title="Rooms" style={tw`my-2`} />
              <FlatList
                ref={thumbRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={images}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={() => changeActiveIndex(index)}>
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
              <Modal visible={showGallery}>
                <HotelRoomsGallery
                  initialActiveIndex={activeIndex}
                  onSetActiveIndex={(index) => changeActiveIndex(index)}
                  onClose={() => setShowGallery(false)}
                  images={images}
                />
              </Modal>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default HotelDetailsScreen;
