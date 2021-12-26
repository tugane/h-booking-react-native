import React, { forwardRef, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Text, View } from "react-native";
import SectionHeader from "../header/SectionHeader";
import Pricepernight from "../others/PricePerNight";
import Showmore from "../others/ShowMore";
import Totalreviews from "../review/TotalReviews";

function Overview({ item }, ref) {
  const [toggleDescription, setToggleDescription] = useState(false);
  return (
    <>
      <View ref={ref} style={tw`px-4 pt-4 rounded-t-2xl bg-white`}>
        <SectionHeader title="Overview" style={tw`mb-2`} />
        <View style={tw`my-2`}>
          <Text style={tw`text-gray-700`}>5 Star</Text>
          <Totalreviews
            averageRatings={item.averageRatings}
            totalReviews={item.totalReviews}
          />
        </View>
        <Text
          style={tw`text-lg text-justify`}
          numberOfLines={!toggleDescription ? 4 : 100}
        >
          {item.description}
        </Text>
        <Showmore
          onPress={() => setToggleDescription(!toggleDescription)}
          toggled={toggleDescription}
        />
      </View>
      <Pricepernight style={tw`ml-3`} price={item.price} />
    </>
  );
}
export default forwardRef(Overview);
