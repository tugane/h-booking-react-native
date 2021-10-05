import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SectionHeader from "./SectionHeader";
import colors from "../config/colors";
import Favoratebutton from "./FavorateButton";

function RecommendedHotels({ data, navigation }) {
  const [hotelItemWidth, setHoteItemWidth] = useState(() => {
    const screen = Dimensions.get("screen");
    return screen.width - 80;
  });
  return (
    <>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={tw`flex-row py-4`}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("hotelDetail", { hotel: item })}
          >
            <View
              style={[
                tw`p-2 rounded-lg mr-2 flex-row bg-white h-52`,
                { width: hotelItemWidth },
              ]}
            >
              <View style={tw`w-full rounded-lg overflow-hidden h-full`}>
                <Image style={tw`w-full h-full`} source={item.imageUrl} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default RecommendedHotels;
