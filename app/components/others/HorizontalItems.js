import React, { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import HorizontalItem from "./HorizontalItem";

function HorizontalItems({
  items,
  selectedItem,
  itemStyles,
  selectedItemBackgroundColor,
  itemTextStles,
  itemContainerStyle,
  initialActiveItemIndex = 0,
}) {
  const activeItemIndex = initialActiveItemIndex;
  const [activeItem, setActiveItem] = useState(items[activeItemIndex]);
  const flatListRef = useRef();
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        { flexDirection: "row", marginTop: 10 },
        itemContainerStyle,
      ]}
      ref={flatListRef}
      data={items}
      keyExtractor={(item) => item.id.toString()}
      onContentSizeChange={() =>
        flatListRef.current.scrollToItem({ item: items[activeItemIndex] })
      }
      onScrollToIndexFailed={() => console.log("scroll to item failed")}
      renderItem={({ item }) => (
        <HorizontalItem
          itemStyles={itemStyles}
          activeItemBackgroundColor={selectedItemBackgroundColor}
          itemTextStles={itemTextStles}
          onPress={() => {
            flatListRef.current.scrollToItem({ item: item });
            setActiveItem(item);
            selectedItem(item);
          }}
          activeItemId={activeItem.id}
          item={item}
        />
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default HorizontalItems;
