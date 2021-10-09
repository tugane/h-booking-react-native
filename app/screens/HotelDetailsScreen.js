import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import colors from "../config/colors";
import Screen from "../components/Screen";
import HorizontalItems from "../components/HorizontalItems";
import HotelOverview from "../components/HotelOverview";
import HotelInfo from "../components/HotelInformation";
import Hotelcontactinformation from "../components/HotelContactInformation";
import HotelRooms from "../components/HotelRooms";
import HotelReviews from "../components/HotelReviews";

const items = [
  {
    id: 1,
    name: "Overview",
  },
  {
    id: 2,
    name: "Rooms",
  },
  {
    id: 3,
    name: "Review",
  },
  {
    id: 5,
    name: "Photos",
  },
];
const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
function HotelDetailsScreen({ navigation, route }) {
  const hotel = route.params.hotel;

  const sectionChange = (item) => {};

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        enabled
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <HotelInfo hotel={hotel} navigation={navigation} />
            <View style={tw`-mt-16`}>
              <HorizontalItems
                itemTextStles={tw`text-white`}
                initialActiveItemIndex={0}
                selectedItemBackgroundColor={colors.secondary}
                itemContainerStyle={tw`mb-2 mt-0 pr-3`}
                items={items}
                selectedItem={(item) => sectionChange(item)}
                itemStyles={[
                  tw`ml-4 p-2 rounded`,
                  { backgroundColor: colors.medium },
                ]}
              />
              <HotelOverview hotel={hotel} />
              <HotelRooms route={route} />
              <Hotelcontactinformation hotel={hotel} />
              <HotelReviews hotel={hotel} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default HotelDetailsScreen;
