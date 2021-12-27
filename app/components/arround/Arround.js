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
import SectionHeader from "../header/SectionHeader";
import colors from "../../config/colors";
import Button from "../others/Button";
import Favoratebutton from "../others/FavorateButton";
import StarRating from "react-native-star-rating";
function Arround({ data, navigation }) {
  return (
    <>
      <SectionHeader title="Arround You" subTitle="See more" />
      <View>
        {data.map((item) => {
          return (
            <TouchableWithoutFeedback
              key={item.id}
              onPress={() => navigation.navigate("details", { item: item })}
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
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={item.averageRatings}
                      starSize={20}
                      fullStarColor={colors.yellow}
                      selectedStar={(rating) => console.log(rating)}
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
          );
        })}
      </View>
      {/* <FlatList
        disableVirtualization={true}
        contentContainerStyle={tw`py-4`}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("details", { item: item })}
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
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={item.averageRatings}
                    starSize={20}
                    fullStarColor={colors.yellow}
                    selectedStar={(rating) => console.log(rating)}
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
      /> */}
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

export default Arround;
