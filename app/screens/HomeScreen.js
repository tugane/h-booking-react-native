import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import tw from "tailwind-react-native-classnames";
import HorizontalItems from "../components/HorizontalItems";
import HomeSearch from "../components/HomeSearch";
import HomeHeader from "../components/HomeHeader";
import RecommendedHotels from "../components/RecommendedHotels";
import HotelArround from "../components/HotelArround";
const hotelsLit = [
  {
    id: 1,
    name: "The Rose Hotel",
    price: 120,
    distance: "2.4km",
    image: require("../assets/hotels/h1.jpg"),
    description:
      "Sit consequat elit cupidatat adipisicing veniam anim consectetur voluptate consequat sunt Lorem excepteur labore. Et reprehenderit anim fugiat elit aliqua ex non eu culpa fugiat laboris irure consectetur irure. Aliquip commodo duis fugiat duis anim est cillum.",
  },
  {
    id: 2,
    name: "MOXY NYC Times SquareOpens in new window",
    price: 420,
    distance: "2.1km",
    image: require("../assets/hotels/h2.jpg"),
    description:
      "Culpa est ex fugiat proident id adipisicing. Occaecat excepteur culpa amet aute consequat dolore irure sunt excepteur eiusmod sint eu est. Et consectetur commodo est quis cillum irure esse minim.",
  },
  {
    id: 3,
    name: "Riu Plaza Manhattan Times SquareOpens in new window",
    price: 310,
    distance: "4.5km",
    image: require("../assets/hotels/h3.jpg"),
    description:
      "Lorem nulla elit reprehenderit tempor veniam ipsum aliquip proident. Veniam elit proident aliquip dolore esse pariatur non occaecat qui tempor sint do et. Duis nostrud elit quis do adipisicing laborum. Nulla consequat irure in ut proident quis voluptate qui consequat enim exercitation anim id culpa.",
  },
  {
    id: 4,
    name: "Hotel Edison Times Square",
    price: 420,
    distance: "1.8km",
    image: require("../assets/hotels/h4.jpg"),
    description:
      "Sint quis in eu aliqua culpa do laboris laboris et fugiat aliqua esse eiusmod. Cupidatat non esse excepteur do nulla sit eu ipsum et velit. Consequat ea consequat sint ea duis enim proident laborum excepteur nisi in. Deserunt sint nulla non tempor anim. Et nulla aliqua Lorem magna ea pariatur anim enim exercitation ea eu id reprehenderit culpa. Mollit ex reprehenderit enim proident cupidatat commodo sint.",
  },
  {
    id: 5,
    name: "Ameritania at Times SquareOpens in new window",
    price: 220,
    distance: "2.3km",
    image: require("../assets/hotels/h5.jpg"),
    description:
      "Tempor dolore esse elit laboris dolor elit dolore nulla id consectetur labore et. Commodo non id non est sit sit duis nostrud eu nulla. Ut irure occaecat eiusmod exercitation tempor fugiat ullamco excepteur ex ea reprehenderit consequat reprehenderit. Cupidatat dolore tempor et eu culpa nostrud tempor. Consectetur Lorem irure qui quis tempor mollit enim amet.",
  },
  {
    id: 6,
    name: "Freehand New YorkOpens in new window",
    price: 150,
    distance: "3.5km",
    image: require("../assets/hotels/h6.jpg"),
    description:
      "Reprehenderit do voluptate amet fugiat qui deserunt nostrud amet sint pariatur proident labore ad ad. Nisi deserunt in enim enim aliqua aute anim culpa id voluptate ipsum officia sit elit. Adipisicing incididunt deserunt veniam occaecat quis ad amet mollit aute magna exercitation culpa officia. Elit exercitation sunt deserunt elit consequat. Cillum commodo amet dolor magna.",
  },
];
const categories = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Hotel",
  },
  {
    id: 4,
    name: "Motel",
  },
  {
    id: 3,
    name: "Apartment",
  },
  {
    id: 5,
    name: "Villa",
  },
];
function HomeScreen({ navigation }) {
  return (
    <Screen style={tw`bg-gray-100`}>
      <ScrollView>
        <HomeHeader />
        <View style={[tw`p-4`]}>
          <HomeSearch navigation={navigation} />
          <HorizontalItems
            itemContainerStyle={tw`mb-6`}
            items={categories}
            selectedItem={(item) => console.log(item)}
            itemStyles={tw`justify-center mr-2 bg-white items-center p-3 rounded-xl`}
          />
          <RecommendedHotels navigation={navigation} data={hotelsLit} />
          <HotelArround navigation={navigation} data={hotelsLit} />
        </View>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default HomeScreen;
