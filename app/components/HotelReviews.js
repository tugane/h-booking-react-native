import React from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
import SectionHeader from "./SectionHeader";
import Reviewssummary from "./reviews/ReviewsSummary";
import Reviewlist from "./reviews/ReviewList";
import Writereview from "./reviews/WriteReview";

const HotelReviews = ({ hotel }) => {
  const reviews = hotel.reviews;
  return (
    <View style={tw`p-4 pt-0`}>
      <SectionHeader title="T-Hotel Review" style={tw`my-4`} />
      <Reviewssummary hotel={hotel} />
      <Reviewlist reviews={reviews} />
      <Writereview />
    </View>
  );
};
export default HotelReviews;
