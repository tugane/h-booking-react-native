import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import SectionHeader from "./SectionHeader";
import StarRating from "react-native-star-rating";
import Pricepernight from "./PricePerNight";
import Showmore from "./ShowMore";
import Totalreviews from "./reviews/TotalReviews";

function HotelOverview({ hotel }) {
  const [toggleDescription, setToggleDescription] = useState(false);
  return (
    <>
      <View style={tw`px-4 pt-4 rounded-t-2xl bg-white`}>
        <SectionHeader title="Overview" style={tw`mb-2`} />
        <View style={tw`my-2`}>
          <Text style={tw`text-gray-700`}>5 Star Hotel</Text>
          <Totalreviews
            averageRatings={hotel.averageRatings}
            totalReviews={hotel.totalReviews}
          />
        </View>
        <Text
          style={tw`text-lg text-justify`}
          numberOfLines={!toggleDescription ? 4 : 100}
        >
          {hotel.description}
        </Text>
        <Showmore
          onPress={() => setToggleDescription(!toggleDescription)}
          toggled={toggleDescription}
        />
      </View>
      <Pricepernight style={tw`ml-3`} price={hotel.price} />
    </>
  );
}
export default HotelOverview;
