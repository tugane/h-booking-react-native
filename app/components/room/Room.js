import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import colors from "../../config/colors";
import Button from "../others/Button";
import Pricepernight from "../others/PricePerNight";

const Room = ({ onImagePress, onBook, roomItemWidth, item, SPACING }) => {
  return (
    <View
      style={[
        tw`shadow bg-gray-100`,
        {
          width: roomItemWidth,
          marginRight: SPACING,
          padding: 10,
          borderRadius: 12,
        },
      ]}
    >
      <TouchableOpacity onPress={onImagePress}>
        <Image
          style={[
            tw`h-44`,
            {
              width: "100%",
              borderRadius: 12,
            },
          ]}
          source={item.imageUrl}
        />
        <Text
          style={{
            marginVertical: 5,
            fontSize: 15,
            color: colors.medium,
          }}
          numberOfLines={1}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
      <View style={tw`w-full flex-row justify-between`}>
        <View style={tw`w-4/12`}>
          <Pricepernight price={item.price} />
        </View>
        <Button
          onPress={() => onBook(item)}
          style={tw`w-6/12 text-white mb-0 mr-0`}
          backgroundColor={colors.primary}
          text="Book"
        />
      </View>
    </View>
  );
};

export default Room;
