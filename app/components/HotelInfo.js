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
            <View style={tw`flex-row items-center mt-5`}>
              <View
                style={[
                  tw`text-base p-2 mr-3 rounded`,
                  { backgroundColor: colors.primary },
                ]}
              >
                <Text style={tw`text-white`}>5 Star Hotel</Text>
              </View>
              <View style={tw`flex-row justify-center items-center`}>
                <MaterialCommunityIcons
                  name="star"
                  size={20}
                  color={colors.yellow}
                />
                <Text style={[tw`text-lg font-bold`, { color: colors.yellow }]}>
                  k 8,6
                </Text>
                <Text style={tw`text-lg text-gray-200 `}>/17.851</Text>
              </View>
            </View>
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
