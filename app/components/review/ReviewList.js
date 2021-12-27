import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../../config/colors";
import SelectDropdown from "react-native-select-dropdown";
import SectionHeader from "../header/SectionHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import Reviewlistitem from "./ReviewListItem";

const initialLimit = 2;

const Reviewlist = ({ reviews }) => {
  const [limit, setLimit] = useState(initialLimit);
  const [sorts, setSorts] = useState(["Nearest", "Oldest"]);

  const getData = () => {
    return reviews.filter((review, index) => index < limit);
  };
  return (
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
          defaultButtonText="Sort By"
          buttonStyle={{
            borderWidth: 2,
            borderRadius: 30,
            borderColor: colors.secondary,
            backgroundColor: colors.white,
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
      {getData().map((item) => {
        return <Reviewlistitem key={item.id} item={item} />;
      })}
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
  );
};

const styles = StyleSheet.create({});

export default Reviewlist;
