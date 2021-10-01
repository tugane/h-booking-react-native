import React from "react";
import tw from "tailwind-react-native-classnames";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import colors from "../config/colors";
import SectionHeader from "./SectionHeader";

function HotelOverview() {
  return (
    <>
      <View style={tw`px-4 pt-4 rounded-t-2xl bg-white`}>
        <SectionHeader title="Overview" style={tw`mb-2`} />
        <Text style={tw`text-lg text-justify`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at
          voluptates! Ullam, fuga.
        </Text>
        <Text style={tw`text-lg text-justify mt-3`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          enim ea! Exercitationem eiciendis{" "}
        </Text>
      </View>
      <View style={tw`w-full px-4 flex-row`}>
        <View style={tw`w-4/12 mt-3`}>
          <Text style={tw`text-base text-gray-400`}>Start at</Text>
          <View style={tw`flex-row`}>
            <Text style={tw`text-2xl mr-2 text-black font-bold`}>$120</Text>
            <Text style={tw`text-base text-gray-400`}>/night</Text>
          </View>
        </View>
        <Button
          style={tw`w-8/12 text-white mb-0`}
          backgroundColor={colors.primary}
          text="Continue"
        />
      </View>
    </>
  );
}
export default HotelOverview;
