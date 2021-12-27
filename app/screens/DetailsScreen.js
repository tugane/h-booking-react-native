import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import {
  wrapScrollView,
  useScrollIntoView,
} from "react-native-scroll-into-view";
import tw from "tailwind-react-native-classnames";
import colors from "../config/colors";
import Screen from "../components/others/Screen";
import HorizontalItems from "../components/others/HorizontalItems";
import Overview from "../components/overview/Overview";
import ContactInformation from "../components/contact/ContactInformation";
import Rooms from "../components/room/Rooms";
import Reviews from "../components/review/Reviews";
import Information from "../components/information/Information";

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
    name: "Contacts",
  },
  {
    id: 4,
    name: "Reviews",
  },
];
const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

const CustomScrollView = wrapScrollView(ScrollView);

export default function DetailsScreen({ navigation, route }) {
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={keyboardVerticalOffset}
      enabled
    >
      <CustomScrollView>
        <MyScreenContent navigation={navigation} route={route} />
      </CustomScrollView>
    </KeyboardAvoidingView>
  );
}

function MyScreenContent({ navigation, route }) {
  const scrollIntoView = useScrollIntoView();
  const roomsRef = useRef();
  const overviewRef = useRef();
  const contactRef = useRef();
  const reviewsRef = useRef();
  const InfRef = useRef();
  const item = route.params.item;

  const onSelectItem = (name) => {
    switch (name) {
      case "Rooms":
        scrollIntoView(roomsRef.current);
        break;
      case "Contacts":
        scrollIntoView(contactRef.current);
        break;
      case "Reviews":
        scrollIntoView(reviewsRef.current);
        break;
      case "Overview":
        scrollIntoView(overviewRef.current);
        break;

      default:
        scrollIntoView(InfRef.current);
        break;
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Information ref={InfRef} item={item} navigation={navigation} />
        <View style={tw`-mt-16`}>
          <HorizontalItems
            itemTextStles={tw`text-white`}
            initialActiveItemIndex={0}
            selectedItemBackgroundColor={colors.secondary}
            itemContainerStyle={tw`mb-2 mt-0 pr-3`}
            items={items}
            selectedItem={(item) => onSelectItem(item.name)}
            itemStyles={[
              tw`ml-4 p-2 rounded`,
              { backgroundColor: colors.medium },
            ]}
          />
          <Overview ref={overviewRef} item={item} />
          <Rooms ref={roomsRef} route={route} />
          <ContactInformation ref={contactRef} item={item} />
          <Reviews ref={reviewsRef} item={item} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
