import React from "react";
import { View, Text } from "react-native";

import colors from "../../config/colors";
import Totalreviews from "./TotalReviews";
const Reviewaverage = ({ averageRatings, totalReviews }) => {
  return (
    <>
      <View
        style={{
          backgroundColor: colors.secondary,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          width: 100,
          height: 100,
          borderRadius: 12,
        }}
      >
        <Text style={{ fontSize: 40, color: colors.light }}>
          {averageRatings}
        </Text>
      </View>
      <Totalreviews
        horizontal={false}
        totalReviews={totalReviews}
        averageRatings={averageRatings}
      />
    </>
  );
};

export default Reviewaverage;
