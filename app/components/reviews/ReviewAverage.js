import React from "react";
import { View, Text } from "react-native";

import StarRating from "react-native-star-rating";
import colors from "../../config/colors";
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
      <View style={{ marginVertical: 10 }}>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={averageRatings}
          starSize={20}
          fullStarColor={colors.yellow}
          selectedStar={(rating) => console.log(rating)}
        />
        <Text style={{ fontSize: 17, color: colors.medium, fontWeight: "500" }}>
          {totalReviews} Reviews
        </Text>
      </View>
    </>
  );
};

export default Reviewaverage;
