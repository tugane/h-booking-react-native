import React, { forwardRef, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Text, View } from "react-native";
import SectionHeader from "../header/SectionHeader";
import Pricepernight from "../others/PricePerNight";
import Showmore from "../others/ShowMore";
import Totalreviews from "../review/TotalReviews";

function HotelOverview({ hotel }, ref) {
  const [toggleDescription, setToggleDescription] = useState(false);
  return (
    <>
      <View ref={ref} style={tw`px-4 pt-4 rounded-t-2xl bg-white`}>
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
export default forwardRef(HotelOverview);
