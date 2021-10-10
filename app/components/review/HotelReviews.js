import React, { forwardRef } from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
import SectionHeader from "../header/SectionHeader";
import Reviewssummary from "./ReviewsSummary";
import Reviewlist from "./ReviewList";
import Writereview from "./WriteReview";

const HotelReviews = ({ hotel }, ref) => {
  const reviews = hotel.reviews;
  return (
    <View ref={ref} style={tw`p-4 pt-0`}>
      <SectionHeader title="T-Hotel Review" style={tw`my-4`} />
      <Reviewssummary hotel={hotel} />
      <Reviewlist reviews={reviews} />
      <Writereview />
    </View>
  );
};
export default forwardRef(HotelReviews);
