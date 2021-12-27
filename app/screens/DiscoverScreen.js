import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import categories from "../api/categories";
import Screen from "../components/others/Screen";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import Screentitle from "../components/others/ScreenTitle";

const items = categories;

function DiscoverScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Screentitle title="Discover" />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("categoryDetails", { item: item })
                }
              >
                <View style={styles.item}>
                  <LinearGradient
                    colors={["#0000", "#000"]}
                    style={styles.titleWrap}
                  >
                    <Text style={styles.title}>{item.name}</Text>
                    <Text numberOfLines={1} style={styles.description}>
                      {item.description}
                    </Text>
                  </LinearGradient>
                  <Image style={styles.image} source={item.image} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  item: {
    marginVertical: 10,
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
  },
  titleWrap: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    padding: 20,
    bottom: 0,
  },
  title: {
    fontWeight: "800",
    color: colors.white,
    fontSize: 30,
    top: 0,
    textTransform: "uppercase",
  },
  description: {
    color: colors.light,
    fontSize: 15,
    fontWeight: "400",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
export default DiscoverScreen;
