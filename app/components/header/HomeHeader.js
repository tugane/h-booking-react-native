import React from "react";
import tw from "tailwind-react-native-classnames";
import { Image, StyleSheet, Text, View } from "react-native";

function HomeHeader() {
  return (
    <View style={tw``}>
      <View style={tw`w-full h-60 bg-gray-900`}>
        <Image
          style={tw`h-full w-full opacity-70`}
          source={require("../../assets/hotels/h6.jpg")}
        />
      </View>
      <View style={tw`p-4 absolute w-full h-full`}>
        <View style={tw`flex-row justify-between `}>
          <View>
            <Text style={[tw`text-2xl font-bold text-gray-100`]}>
              Hi Tugane,
            </Text>
            <Text style={[tw`text-lg font-bold mt-1 text-gray-100`]}>
              Where do you want to stay?
            </Text>
          </View>
          <View style={tw`h-10 w-10 overflow-hidden rounded-full`}>
            <Image
              style={tw`h-full w-full`}
              source={require("../../assets/tugane.jpg")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default HomeHeader;
