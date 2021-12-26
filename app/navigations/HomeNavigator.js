import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FilterScreen from "../screens/FilterScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import RoomsGallery from "../components/room/RoomsGallery";

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen
        name="filter"
        component={FilterScreen}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen
        name="details"
        component={DetailsScreen}
        options={{ presentation: "card" }}
      />
      <Stack.Screen
        name="RoomsGallery"
        component={RoomsGallery}
        options={{ presentation: "fullScreenModal" }}
      />
    </Stack.Navigator>
  );
}
export default HomeNavigator;
