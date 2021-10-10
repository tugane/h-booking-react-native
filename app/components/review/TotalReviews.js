import React from "react";
import { Text, View } from "react-native";
import StarRating from "react-native-star-rating";
import colors from "../../config/colors";

const Totalreviews = ({
  averageRatings,
  totalReviews,
  horizontal = `${true}`,
}) => {
  return (
    <View
      style={{
        marginVertical: 10,
        flexDirection: horizontal ? "row" : "column",
        alignItems: !horizontal ? "center" : "flex-start",
      }}
    >
      <View style={{ width: horizontal ? "30%" : "100%" }}>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={averageRatings}
          starSize={20}
          fullStarColor={colors.yellow}
          selectedStar={(rating) => console.log(rating)}
        />
      </View>
      <Text
        style={{
          fontSize: 15,
          color: colors.medium,
          fontWeight: "500",
          marginLeft: 10,
        }}
      >
        {totalReviews} Reviews
      </Text>
    </View>
  );
};

export default Totalreviews;
