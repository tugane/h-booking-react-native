import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/others/Screen";
import tw from "tailwind-react-native-classnames";
import colors from "../config/colors";
import Slider from "@react-native-community/slider";
import HorizontalItems from "../components/others/HorizontalItems";
import Button from "../components/others/Button";

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

const bedrooms = [
  {
    id: 1,
    name: 1,
  },
  {
    id: 2,
    name: 2,
  },
  {
    id: 4,
    name: 3,
  },
  {
    id: 3,
    name: 4,
  },
  {
    id: 5,
    name: 5,
  },
];

function FilterScreen() {
  const [rangeValue, setRangeValue] = useState(0);
  return (
    <Screen>
      <View style={tw`w-full p-4 bg-white`}>
        <View style={tw`items-center pb-5 border-b-2 border-gray-100`}>
          <Text style={tw`text-xl font-bold`}>Filter</Text>
        </View>
        <View style={tw`mt-2 py-5 border-b-2 border-gray-100`}>
          <Text style={tw`text-lg`}>Type</Text>
          <HorizontalItems
            itemStyles={tw`p-2 px-3 rounded-full border-gray-100 border-2 mr-2`}
            selectedItem={(item) => console.log(item)}
            items={categories}
          />
        </View>
        <View style={tw`mt-2 py-5 border-b-2 border-gray-100`}>
          <Text style={tw`text-lg`}>Price</Text>
          <View style={tw`flex-row mt-3`}>
            <View style={tw`border-b-2 border-gray-100 w-full`}>
              <Text style={[tw`text-xl font-bold`, { color: colors.primary }]}>
                ${rangeValue} - $1000
              </Text>
              <Slider
                style={tw`w-full`}
                value={rangeValue}
                onSlidingComplete={(value) => setRangeValue(Math.round(value))}
                minimumValue={0}
                maximumValue={1000}
                minimumTrackTintColor={colors.secondary}
                maximumTrackTintColor="#000000"
              />
            </View>
          </View>
        </View>
        <View style={tw`mt-2 py-5 border-b-2 border-gray-100`}>
          <Text style={tw`text-lg`}>Bredrooms</Text>
          <HorizontalItems
            itemStyles={tw`p-2 px-4 rounded-full border-gray-100 border-2 mr-2`}
            selectedItem={(item) => console.log(item)}
            items={bedrooms}
          />
        </View>
        <Button
          backgroundColor={colors.secondary}
          width="100%"
          text="Continue"
          color={colors.white}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default FilterScreen;
