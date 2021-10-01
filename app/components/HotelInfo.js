import React from "react";
import tw from "tailwind-react-native-classnames";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function HotelInfomation({ navigation }) {
  return (
    <>
      <View style={[tw`bg-black`, { height: 400 }]}>
        <Image
          style={tw`w-full h-full opacity-70`}
          source={require("../assets/hotels/h1.jpg")}
        />
        <View style={tw`p-4 absolute mt-6 w-full`}>
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
            <TouchableOpacity style={tw`rounded-lg bg-gray-700 p-2 opacity-70`}>
              <MaterialCommunityIcons
                color={colors.light}
                name="bookmark-outline"
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View style={tw`mt-24`}>
            <Text style={tw`text-3xl text-white font-bold`}>
              Hotel Flower Blooms so Far so Good
            </Text>
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
