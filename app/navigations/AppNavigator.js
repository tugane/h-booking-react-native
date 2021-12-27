import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import HomeNavigator from "./HomeNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Discovernavigator from "./DiscoverNavigator";
import Favoritenavigator from "./FavoriteNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { paddingVertical: 10 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontSize: 13 },
        }}
      />
      <Tab.Screen
        name="Discovery"
        component={Discovernavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="vector-difference-ab"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Discovery",
          tabBarLabelStyle: { fontSize: 13 },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favoritenavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="book-variant"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Favorite",
          tabBarLabelStyle: { fontSize: 13 },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
          tabBarLabelStyle: { fontSize: 13 },
        }}
      />
    </Tab.Navigator>
  );
}
export default AppNavigator;
