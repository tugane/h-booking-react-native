import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Gobackbutton from "../components/others/GoBackButton";
import colors from "../config/colors";
const SPACING = 20;
import allItems from "../api/hotels";
import Itemseparetor from "../components/others/ItemSeparetor";
import Button from "../components/others/Button";
import Listitem from "../components/others/ListItem";

const CategorydetailsScreen = ({ navigation, route }) => {
  const category = route.params.item;
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(allItems.filter((item) => item.catgeory_id == category.id));
  }, []);
  return (
    <FlatList
      ListHeaderComponent={() => {
        return (
          <View style={{ marginBottom: SPACING }}>
            <Gobackbutton
              style={styles.backButton}
              color={colors.white}
              onPress={() => navigation.goBack()}
              name="arrow-left"
            />
            <Image source={category.image} style={styles.image} />
            <View style={styles.textWrap}>
              <Text style={styles.title}>{category.name}</Text>
              <Text numberOfLines={10} style={styles.description}>
                {category.description}
              </Text>
            </View>
          </View>
        );
      }}
      data={items}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => (
        <Itemseparetor style={{ paddingLeft: SPACING * 4 }} />
      )}
      renderItem={({ item }) => {
        return (
          <Listitem
            itemContainerStyle={{ paddingHorizontal: SPACING / 2 }}
            title={item.name}
            image={item.image}
            subTitle={item.description}
            onPress={() => navigation.navigate("details", { item: item })}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: SPACING * 3,
    left: SPACING,
    zIndex: 1,
    backgroundColor: colors.medium,
    borderRadius: SPACING / 5,
    padding: SPACING / 4,
  },
  image: {
    height: 350,
    resizeMode: "cover",
  },
  textWrap: {
    padding: SPACING / 2,
  },
  title: {
    fontWeight: "800",
    color: colors.black,
    fontSize: SPACING + 10,
    top: 0,
    textTransform: "capitalize",
  },
  description: {
    marginTop: SPACING / 2,
    color: colors.medium,
    fontSize: SPACING - 3,
    fontWeight: "400",
  },
});

export default CategorydetailsScreen;
