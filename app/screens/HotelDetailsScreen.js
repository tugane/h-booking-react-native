import React, { useRef, useState } from "react";
import {
  Dimensions,
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
import HotelRoomsGallery from "./HotelRoomsGallery";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

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
    id: 3,
    name: "Review",
  },
  {
    id: 5,
    name: "Photos",
  },
];

const SPACING = 10;
const screen = Dimensions.get("screen");

function HotelDetailsScreen({ navigation, route }) {
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
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HotelInfo hotel={route.params.hotel} navigation={navigation} />
          <View style={tw`-mt-16`}>
            <HorizontalItems
              itemTextStles={tw`text-white`}
              initialActiveItemIndex={0}
              selectedItemBackgroundColor={colors.secondary}
              itemContainerStyle={tw`mb-2 mt-0 pr-3`}
              items={items}
              selectedItem={(item) => sectionChange(item)}
              itemStyles={[
                tw`ml-4 p-2 rounded`,
                { backgroundColor: colors.medium },
              ]}
            />
            <HotelOverview hotel={route.params.hotel} />
            <View style={tw`px-4 mb-4`}>
              <SectionHeader title="Rooms" style={tw`my-4`} />
              <FlatList
                ref={thumbRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={route.params.hotel.rooms}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <View style={{ width: roomItemWidth, marginRight: SPACING }}>
                    <TouchableOpacity onPress={() => changeActiveIndex(index)}>
                      <Image
                        style={[
                          tw`h-44`,
                          {
                            width: "100%",
                            borderRadius: 12,
                            borderWidth: 4,
                            borderColor:
                              activeIndex === index
                                ? colors.secondary
                                : colors.transparent,
                          },
                        ]}
                        source={item.imageUrl}
                      />
                      <Text
                        style={{ marginVertical: 5, fontSize: 15 }}
                        numberOfLines={1}
                      >
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                    <View style={tw`w-full flex-row justify-between`}>
                      <View style={tw`w-4/12 mt-3`}>
                        <Text style={tw`text-base text-gray-400`}>
                          Start at
                        </Text>
                        <View style={tw`flex-row`}>
                          <Text style={tw`text-2xl mr-2 text-black font-bold`}>
                            ${item.price}
                          </Text>
                          <Text style={tw`text-base text-gray-400`}>
                            /night
                          </Text>
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
                  rooms={route.params.hotel.rooms}
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
