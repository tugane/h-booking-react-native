import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../../config/colors";
import StarRating from "react-native-star-rating";

const Reviewlistitem = ({ item }) => {
  return (
    <View
      style={{
        width: "100%",
        marginVertical: 10,
        flexDirection: "row",
      }}
    >
      <View style={{ width: "15%" }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: colors.midMedium,
            borderRadius: 25,
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={item.userAvatar}
          />
        </View>
      </View>
      <View style={{ width: "85%" }}>
        <Text
          style={{
            fontSize: 16,
            color: colors.medium,
            fontWeight: "bold",
          }}
          numberOfLines={2}
        >
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            alignItems: "center",
          }}
        >
          <StarRating
            disabled
            maxStars={5}
            rating={item.rating}
            starSize={20}
            fullStarColor={colors.yellow}
            selectedStar={(rating) => console.log(rating)}
          />
          <Text
            style={{
              maxWidth: "65%",
              color: colors.medium,
              fontSize: 14,
              fontWeight: "600",
              marginLeft: 5,
              textAlign: "justify",
            }}
            numberOfLines={1}
          >
            By {item.userName}
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 16,
            color: colors.medium,
          }}
          numberOfLines={4}
        >
          {item.message}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Reviewlistitem;
