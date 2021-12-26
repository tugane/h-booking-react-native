import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import colors from "../config/colors";
import Screen from "../components/others/Screen";
import HorizontalItems from "../components/others/HorizontalItems";
import Overview from "../components/overview/Overview";
import ContactInformation from "../components/contact/ContactInformation";
import Rooms from "../components/room/Rooms";
import Reviews from "../components/review/Reviews";
import Information from "../components/information/Information";

const categories = [
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
    name: "Contacts",
  },
  {
    id: 4,
    name: "Reviews",
  },
];

export default function DetailsScreen({ navigation, route }) {
  const item = route.params.item;

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Information item={item} navigation={navigation} />
          <View style={tw`-mt-16`}>
            <Overview item={item} />
            <Rooms route={route} />
            <ContactInformation item={item} />
            <Reviews item={item} />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
