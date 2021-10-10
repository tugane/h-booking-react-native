import React from "react";
import { View, StyleSheet, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

const Pricepernight = ({ price, style }) => {
  return (
    <View style={[tw`w-full flex-row`, style]}>
      <View style={tw`mt-3`}>
        <Text style={tw`text-base text-gray-400`}>Start at</Text>
        <View style={tw`flex-row`}>
          <Text style={tw`text-2xl mr-2 text-black font-bold`}>${price}</Text>
          <Text style={tw`text-base text-gray-400`}>/night</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Pricepernight;
