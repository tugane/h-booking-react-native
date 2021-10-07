import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SectionHeader from "./SectionHeader";
import colors from "../config/colors";
import Favoratebutton from "./FavorateButton";
import StarRating from "react-native-star-rating";

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
            onPress={() => navigation.navigate("hotelDetail", { hotel: item })}
          >
            <View
              style={[
                tw`p-2 rounded-lg mr-2 flex-row bg-white h-52`,
                { width: hotelItemWidth },
              ]}
            >
              <View style={tw`w-1/3 rounded-lg overflow-hidden h-full`}>
                <Image style={tw`w-full h-full`} source={item.image} />
              </View>
              <View style={tw`w-2/3 p-2`}>
                <View style={tw`flex-row justify-between`}>
                  <Text
                    style={tw`font-bold text-lg text-black w-10/12`}
                    numberOfLines={3}
                  >
                    {item.name}
                  </Text>
                  <Favoratebutton
                    name="bookmark-outline"
                    size={30}
                    color={colors.medium}
                  />
                </View>
                <View style={tw`flex-row mt-1`}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={item.averageRatings}
                    starSize={20}
                    fullStarColor={colors.yellow}
                    selectedStar={(rating) => console.log(rating)}
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
