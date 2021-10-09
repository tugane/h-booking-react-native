import React from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Reviewaverage from "./ReviewAverage";
import Reviewprogressbar from "./ReviewProgressBar";

const Reviewssummary = ({ hotel }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={tw`w-4/12 items-center`}>
        <Reviewaverage
          averageRatings={hotel.averageRatings}
          totalReviews={hotel.totalReviews}
        />
      </View>
      <View style={tw`w-8/12 px-4`}>
        <Reviewprogressbar text="Excellent" progress={1} />
        <Reviewprogressbar text="Very Good" progress={0.6} />
        <Reviewprogressbar text="Average" progress={0.4} />
        <Reviewprogressbar text="Poor" progress={0.2} />
        <Reviewprogressbar text="Terrible" progress={0.1} />
      </View>
    </View>
  );
};

export default Reviewssummary;
