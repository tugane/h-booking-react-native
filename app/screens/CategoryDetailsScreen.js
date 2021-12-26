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
              name="close"
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
        <Itemseparetor style={{ paddingLeft: SPACING * 3 + 5 }} />
      )}
      renderItem={({ item }) => {
        return (
          <View style={styles.contaner}>
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => navigation.navigate("details", { item: item })}
                style={{ flexDirection: "row", width: "65%" }}
              >
                <Image style={styles.itemImage} source={item.image} />
                <View style={styles.itemTextWrap}>
                  <Text style={styles.itemTitle} numberOfLines={2}>
                    {item.name}
                  </Text>
                  <Text style={styles.itemDescription} numberOfLines={1}>
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>
              <Button
                text="Book"
                textStyle={{ fontSize: SPACING - 5 }}
                style={{
                  backgroundColor: colors.primary,
                  paddingHorizontal: SPACING,
                  height: SPACING * 2,
                  borderRadius: SPACING / 2,
                }}
              />
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  contaner: {
    paddingHorizontal: SPACING / 2,
    // height: SPACING * 3,
  },
  backButton: {
    position: "absolute",
    top: SPACING * 3,
    right: SPACING,
    zIndex: 1,
    backgroundColor: colors.black,
    borderRadius: SPACING,
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
  item: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemImage: {
    height: SPACING * 2 + 10,
    width: SPACING * 2 + 10,
    borderRadius: SPACING / 2,
  },
  itemTextWrap: {
    paddingHorizontal: SPACING / 2,
    justifyContent: "space-between",
  },
  itemTitle: {
    fontWeight: "500",
    fontSize: SPACING - 5,
  },
  itemDescription: {
    color: colors.medium,
    fontSize: SPACING - 5,
  },
});

export default CategorydetailsScreen;
