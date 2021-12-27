import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DetailsScreen from "../screens/DetailsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

const Stack = createNativeStackNavigator();

const Favoritenavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="favorite" component={FavoriteScreen} />
      <Stack.Screen name="details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default Favoritenavigator;
