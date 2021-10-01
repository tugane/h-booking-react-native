import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import SectionHeader from "./SectionHeader";
import colors from "../config/colors";

function RecommendedHotels({ data, navigation }) {
  const [hotelItemWidth, setHoteItemWidth] = useState(() => {
    const screen = Dimensions.get("screen");
    return screen.width - 80;
  });
  return (
    <>
      <SectionHeader title="Recommended" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={tw`flex-row py-4`}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("hotelDetail")}
          >
            <View
              style={[
                tw`p-2 rounded-lg mr-2 flex-row bg-white`,
                { width: hotelItemWidth },
              ]}
            >
              <View style={tw`w-1/3 rounded-lg overflow-hidden max-h-40`}>
                <Image style={tw`w-full h-full`} source={item.image} />
              </View>
              <View style={tw`w-2/3 p-2`}>
                <View style={tw`flex-row justify-between`}>
                  <Text style={tw`font-bold text-xl text-black w-10/12`}>
                    {item.name}
                  </Text>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      size={30}
                      color={colors.medium}
                      name="bookmark-outline"
                    />
                  </TouchableOpacity>
                </View>
                <View style={tw`flex-row mt-1`}>
                  <MaterialCommunityIcons
                    size={20}
                    color={colors.yellow}
                    name="star"
                  />
                  <MaterialCommunityIcons
                    size={20}
                    color={colors.yellow}
                    name="star"
                  />
                  <MaterialCommunityIcons
                    size={20}
                    color={colors.yellow}
                    name="star"
                  />
                  <MaterialCommunityIcons
                    size={20}
                    color={colors.yellow}
                    name="star"
                  />
                  <MaterialCommunityIcons
                    size={20}
                    color={colors.yellow}
                    name="star"
                  />
                </View>
                <View
                  style={tw`flex-row items-end justify-between flex-1 w-2/3`}
                >
                  <View>
                    <Text style={tw` text-base text-gray-400`}>Start at</Text>
                    <Text style={tw`font-bold text-xl text-black`}>
                      $ {item.price}
                    </Text>
                  </View>
                  <View>
                    <Text style={tw` text-base text-gray-400`}>Distance</Text>
                    <Text style={tw`font-bold text-xl text-black`}>
                      {item.distance}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default RecommendedHotels;
