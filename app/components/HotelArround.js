import React from "react";
import tw from "tailwind-react-native-classnames";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SectionHeader from "../components/SectionHeader";
import colors from "../config/colors";
import Button from "./Button";
import Favoratebutton from "./FavorateButton";
function HotelArround({ data, navigation }) {
  return (
    <>
      <SectionHeader title="Arround You" subTitle="See more" />
      <FlatList
        contentContainerStyle={tw`py-4`}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("hotelDetail", { hotel: item })}
          >
            <View style={[tw`p-2 rounded-lg my-2 bg-white`]}>
              <View style={tw`rounded-lg overflow-hidden max-h-40`}>
                <Image style={tw`w-full h-full`} source={item.image} />
                <Favoratebutton
                  style={tw`absolute self-end`}
                  size={50}
                  color={colors.yellow}
                  name="bookmark-outline"
                />
              </View>
              <View style={tw`p-2`}>
                <View style={tw`flex-row justify-between`}>
                  <Text style={tw`font-bold text-xl text-black w-10/12`}>
                    {item.name}
                  </Text>
                </View>
                <View style={tw`flex-row`}>
                  <MaterialCommunityIcons
                    size={20}
                    color={colors.yellow}
                    name="star"
                  />
                  <MaterialCommunityIcons
                    size={20}
                    color={colors.yellow}
                    name="star"
                  />
                  <MaterialCommunityIcons
                    size={20}
                    color={colors.yellow}
                    name="star"
                  />
                  <MaterialCommunityIcons
                    size={20}
                    color={colors.yellow}
                    name="star"
                  />
                  <MaterialCommunityIcons
                    size={20}
                    color={colors.yellow}
                    name="star"
                  />
                </View>
                <View style={tw`flex-row items-end justify-between flex-1`}>
                  <View>
                    <Text style={tw` text-base text-gray-400`}>Start at</Text>
                    <Text style={tw`font-bold text-xl text-black`}>
                      $ {item.price}
                    </Text>
                  </View>
                  <View>
                    <Text style={tw` text-base text-gray-400`}>Distance</Text>
                    <Text style={tw`font-bold text-xl text-black`}>
                      {item.distance}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
      <Button
        width="100%"
        backgroundColor={colors.secondary}
        color={colors.white}
        text="View more"
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HotelArround;
