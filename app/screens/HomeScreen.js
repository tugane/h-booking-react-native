import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import HomeSearch from "../components/search/HomeSearch";
import HomeHeader from "../components/header/HomeHeader";
import Recommended from "../components/recommended/Recommended";
import Arround from "../components/arround/Arround";
import items from "../api/hotels";
function HomeScreen({ navigation }) {
  return (
    <View style={tw`bg-gray-100`}>
      <ScrollView>
        <HomeHeader />
        <View style={[tw`p-4`]}>
          <HomeSearch navigation={navigation} />
          <Recommended navigation={navigation} data={items} />
          <Arround navigation={navigation} data={items} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default HomeScreen;
