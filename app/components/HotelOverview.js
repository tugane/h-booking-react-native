import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import SectionHeader from "./SectionHeader";
import StarRating from "react-native-star-rating";

function HotelOverview({ hotel }) {
  const [toggleDescription, setToggleDescription] = useState(false);
  return (
    <>
      <View style={tw`px-4 pt-4 rounded-t-2xl bg-white`}>
        <SectionHeader title="Overview" style={tw`mb-2`} />
        <View style={tw`my-2`}>
          <Text style={tw`text-gray-700`}>5 Star Hotel</Text>
          <View style={tw`flex-row pt-1 items-center`}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={hotel.averageRatings}
              starSize={20}
              fullStarColor={colors.yellow}
              selectedStar={(rating) => console.log(rating)}
            />
            <Text
              style={[tw`text-lg font-bold ml-4`, { color: colors.yellow }]}
            >
              {hotel.averageRatings}
            </Text>
            <Text style={tw`text-lg text-gray-500 ml-4`}>
              {hotel.totalReviews} reviews
            </Text>
          </View>
        </View>
        <Text
          style={tw`text-lg text-justify`}
          numberOfLines={!toggleDescription ? 4 : 100}
        >
          {hotel.description}
        </Text>
        <TouchableOpacity
          onPress={() => setToggleDescription(!toggleDescription)}
          style={{
            backgroundColor: colors.light,
            borderRadius: 15,
            padding: 5,
            alignSelf: "flex-end",
            flexDirection: "row",
          }}
        >
          <Text>show {toggleDescription ? "less" : "more"}</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`w-full px-4 flex-row`}>
        <View style={tw`w-4/12 mt-3`}>
          <Text style={tw`text-base text-gray-400`}>Start at</Text>
          <View style={tw`flex-row`}>
            <Text style={tw`text-2xl mr-2 text-black font-bold`}>
              ${hotel.price}
            </Text>
            <Text style={tw`text-base text-gray-400`}>/night</Text>
          </View>
        </View>
      </View>
    </>
  );
}
export default HotelOverview;
