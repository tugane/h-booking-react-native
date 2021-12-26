import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CategoryDetailsScreen from "../screens/CategoryDetailsScreen";
import DetailsScreen from "../screens/DetailsScreen";
import DiscoverScreen from "../screens/DiscoverScreen";

const Stack = createNativeStackNavigator();

const Discovernavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="categoryDetails" component={CategoryDetailsScreen} />
      <Stack.Screen name="details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default Discovernavigator;
