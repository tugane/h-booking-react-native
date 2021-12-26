import React, { forwardRef } from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
import SectionHeader from "../header/SectionHeader";
import Reviewssummary from "./ReviewsSummary";
import Reviewlist from "./ReviewList";
import Writereview from "./WriteReview";

const Reviews = ({ item }, ref) => {
  const reviews = item.reviews;
  return (
    <View ref={ref} style={tw`p-4 pt-0`}>
      <SectionHeader title="T- Review" style={tw`my-4`} />
      <Reviewssummary item={item} />
      <Reviewlist reviews={reviews} />
      <Writereview />
    </View>
  );
};
export default forwardRef(Reviews);
