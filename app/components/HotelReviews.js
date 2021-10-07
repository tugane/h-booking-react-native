import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import colors from "../config/colors";
import SectionHeader from "./SectionHeader";
import StarRating from "react-native-star-rating";
import * as Progress from "react-native-progress";
import SelectDropdown from "react-native-select-dropdown";

const initialLimit = 2;

const HotelReviews = ({ hotel }) => {
  const reviews = hotel.reviews;

  const [limit, setLimit] = useState(initialLimit);
  const [sorts, setSorts] = useState(["Nearest", "Oldest"]);

  const getData = () => {
    return reviews.filter((review, index) => index < limit);
  };

  return (
    <View style={tw`p-4 pt-0`}>
      <SectionHeader title="T-Hotel Review" style={tw`my-4`} />
      <View style={{ flexDirection: "row" }}>
        <View style={tw`w-4/12 items-center`}>
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
              {hotel.averageRatings}
            </Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={hotel.averageRatings}
              starSize={20}
              fullStarColor={colors.yellow}
              selectedStar={(rating) => console.log(rating)}
            />
            <Text
              style={{ fontSize: 17, color: colors.medium, fontWeight: "500" }}
            >
              {hotel.totalReviews} Reviews
            </Text>
          </View>
        </View>
        <View style={tw`w-8/12 px-4`}>
          <View style={styles.ProgressBarWrap}>
            <Text style={styles.progressBarText}>Excellent</Text>
            <View style={styles.progressWrap}>
              <Progress.Bar
                height={10}
                progress={1}
                borderWidth={0}
                borderRadius={0}
                color={colors.secondary}
              />
            </View>
          </View>
          <View style={styles.ProgressBarWrap}>
            <Text style={styles.progressBarText}>Very Good</Text>
            <View style={styles.progressWrap}>
              <Progress.Bar
                height={10}
                progress={0.6}
                borderWidth={0}
                borderRadius={0}
                color={colors.secondary}
              />
            </View>
          </View>
          <View style={styles.ProgressBarWrap}>
            <Text style={styles.progressBarText}>Average</Text>
            <View style={styles.progressWrap}>
              <Progress.Bar
                height={10}
                progress={0.4}
                borderWidth={0}
                borderRadius={0}
                color={colors.secondary}
              />
            </View>
          </View>
          <View style={styles.ProgressBarWrap}>
            <Text style={styles.progressBarText}>Poor</Text>
            <View style={styles.progressWrap}>
              <Progress.Bar
                height={10}
                progress={0.3}
                borderWidth={0}
                borderRadius={0}
                color={colors.secondary}
              />
            </View>
          </View>
          <View style={styles.ProgressBarWrap}>
            <Text style={styles.progressBarText}>Terrible</Text>
            <View style={styles.progressWrap}>
              <Progress.Bar
                height={10}
                progress={0.1}
                borderWidth={0}
                borderRadius={0}
                color={colors.secondary}
              />
            </View>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SectionHeader title="All Reviews" style={tw`my-4 w-1/3`} />
          <SelectDropdown
            buttonStyle={{
              borderWidth: 2,
              borderRadius: 30,
              borderColor: colors.secondary,
              height: 40,
              width: 170,
            }}
            rowTextStyle={{
              color: colors.secondary,
              fontWeight: "bold",
            }}
            rowStyle={{
              backgroundColor: colors.white,
            }}
            buttonTextStyle={{ color: colors.secondary }}
            renderDropdownIcon={() => (
              <MaterialCommunityIcons
                name="chevron-down"
                size={40}
                color={colors.secondary}
              />
            )}
            data={sorts}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <View>
          <FlatList
            data={getData()}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
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
            )}
          />
          {reviews.length - limit == 0 ? (
            <TouchableOpacity
              onPress={() => setLimit(initialLimit)}
              style={{
                backgroundColor: colors.light,
                padding: 10,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                width: "70%",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: colors.secondary,
                  fontWeight: "700",
                }}
              >
                show less t-booking reviews
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setLimit(reviews.length)}
              style={{
                backgroundColor: colors.light,
                padding: 10,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                width: "70%",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: colors.secondary,
                  fontWeight: "700",
                }}
              >
                {reviews.length - limit} more t-booking reviews
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ProgressBarWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  progressWrap: {
    width: "65%",
    paddingLeft: 7,
  },
  progressBarText: {
    fontSize: 16,
    width: "35%",
    color: colors.medium,
  },
});

export default HotelReviews;
