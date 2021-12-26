import React, { forwardRef } from "react";
import tw from "tailwind-react-native-classnames";
import { Image, Text, View } from "react-native";
import Favoratebutton from "../others/FavorateButton";
import Gobackbutton from "../others/GoBackButton";
function Infomation({ navigation, item }, ref) {
  return (
    <View ref={ref} style={[tw`bg-black`, { maxHeight: 500 }]}>
      <Image style={tw`w-full h-full opacity-90`} source={item.image} />
      <View style={tw`p-4 pb-32 absolute mt-6 w-full  h-full justify-between`}>
        <View style={tw`justify-between flex-row w-full`}>
          <Gobackbutton
            style={tw`rounded-lg bg-gray-700 p-2 opacity-90`}
            onPress={() => navigation.goBack()}
          />
          <Favoratebutton style={tw`rounded-lg bg-gray-700 p-2 opacity-90`} />
        </View>
        <View style={tw``}>
          <Text style={tw`text-2xl text-white font-bold`} numberOfLines={3}>
            {item.name}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default forwardRef(Infomation);
