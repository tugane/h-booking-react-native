import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from "../../config/colors";

function HomeSearch({ navigation }) {
  return (
    <View
      style={tw`p-4 -mt-10 mb-4 bg-white rounded-lg w-full flex-row justify-between`}
    >
      <Ionicons
        style={tw`w-1/12`}
        name="search"
        color={colors.medium}
        size={20}
      />
      <TouchableOpacity style={tw`w-10/12 h-full`}>
        <TextInput
          name="search"
          style={tw`text-lg`}
          placeholderTextColor={colors.medium}
          placeholder="Search.."
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("filter")}
        style={tw`w-1/12 justify-center`}
      >
        <View style={tw`mx-auto`}>
          <MaterialCommunityIcons
            name="filter-variant"
            color={colors.medium}
            size={20}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default HomeSearch;
