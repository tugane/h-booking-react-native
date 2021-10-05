import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import tw from "tailwind-react-native-classnames";
import HorizontalItems from "../components/HorizontalItems";
import HomeSearch from "../components/HomeSearch";
import HomeHeader from "../components/HomeHeader";
import RecommendedHotels from "../components/RecommendedHotels";
import HotelArround from "../components/HotelArround";
import hotels from "../api/hotels";
const categories = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Hotel",
  },
  {
    id: 4,
    name: "Motel",
  },
  {
    id: 3,
    name: "Apartment",
  },
  {
    id: 5,
    name: "Villa",
  },
];
function HomeScreen({ navigation }) {
  return (
    <Screen style={tw`bg-gray-100`}>
      <ScrollView>
        <HomeHeader />
        <View style={[tw`p-4`]}>
          <HomeSearch navigation={navigation} />
          <HorizontalItems
            itemContainerStyle={tw`mb-6`}
            items={categories}
            selectedItem={(item) => console.log(item)}
            itemStyles={tw`justify-center mr-2 bg-white items-center p-3 rounded-xl`}
          />
          <RecommendedHotels navigation={navigation} data={hotels} />
          <HotelArround navigation={navigation} data={hotels} />
        </View>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default HomeScreen;
