import React from "react";
import tw from "tailwind-react-native-classnames";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Favoratebutton from "./FavorateButton";

function HotelInfomation({ navigation, hotel }) {
  return (
    <>
      <View style={[tw`bg-black`, { maxHeight: 500 }]}>
        <Image style={tw`w-full h-full opacity-70`} source={hotel.image} />
        <View
          style={tw`p-4 pb-32 absolute mt-6 w-full  h-full justify-between`}
        >
          <View style={tw`justify-between flex-row w-full`}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={tw`rounded-lg bg-gray-700 p-2 opacity-70`}
            >
              <MaterialCommunityIcons
                color={colors.light}
                name="arrow-left"
                size={30}
              />
            </TouchableOpacity>
            <Favoratebutton
              style={tw`rounded-lg bg-gray-700 p-2 opacity-70`}
              id
            />
          </View>
          <View style={tw``}>
            <Text style={tw`text-xl text-white font-bold`}>{hotel.name}</Text>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default HotelInfomation;
