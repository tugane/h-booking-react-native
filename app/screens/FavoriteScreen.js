import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "../components/others/Screen";
import Screentitle from "../components/others/ScreenTitle";
const SPACING = 20;

import allItens from "../api/hotels";
import colors from "../config/colors";
import Itemseparetor from "../components/others/ItemSeparetor";
import Listitem from "../components/others/ListItem";
import Listitemdeleteaction from "../components/others/ListItemDeleteAction";

function FavoriteScreen({ navigation }) {
  const [items, setItems] = useState();
  useEffect(() => {
    setItems(allItens.filter((item) => item.favorive));
  }, []);
  const onUnFavorative = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <Screen>
      <View style={styles.container}>
        <Screentitle title="Favorite" />
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => (
            <Itemseparetor style={styles.separator} />
          )}
          renderItem={({ item }) => {
            return (
              <Listitem
                image={item.image}
                title={item.name}
                subTitle={item.description}
                onPress={() => navigation.navigate("details", { item: item })}
                renderRightActions={() => {
                  return (
                    <Listitemdeleteaction
                      onPress={() => onUnFavorative(item.id)}
                    />
                  );
                }}
              />
            );
          }}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING / 2,
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
  separator: {
    paddingLeft: SPACING * 4,
  },
});
export default FavoriteScreen;
