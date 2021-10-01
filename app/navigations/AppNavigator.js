import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeNavigator from './HomeNavigator';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function AppNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { paddingVertical: 10 }}}>
            <Tab.Screen name="Nearby" component={HomeNavigator}
                options={{ 
                tabBarIcon: ({size,color}) => 
                    <MaterialCommunityIcons name="mapbox" 
                    size={size} color={color} />, 
                tabBarLabel: 'Nearby', 
                tabBarLabelStyle: { fontSize: 13 }  
            }}
            />
            <Tab.Screen name="Discovery" component={DiscoveryScreen} 
                options={{  
                tabBarIcon: ({size,color}) => 
                    <MaterialCommunityIcons name="vector-difference-ab" 
                    size={size} color={color} />, 
                tabBarLabel: 'Discovery', 
                tabBarLabelStyle: { fontSize: 13 }  
            }}
            />
            <Tab.Screen name="Favorite" component={FavoriteScreen} 
                options={{ 
                tabBarIcon: ({size,color}) => 
                    <MaterialCommunityIcons name="book-variant" 
                    size={size} color={color} />, 
                tabBarLabel: 'Favorite', 
                tabBarLabelStyle: { fontSize: 13 }  
            }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{ 
                tabBarIcon: ({size,color}) => 
                    <MaterialCommunityIcons name="account" 
                    size={size} color={color} />, 
                tabBarLabel: 'Profile', 
                tabBarLabelStyle: { fontSize: 13 }  
            }}
            />
        </Tab.Navigator>
    )
}
export default AppNavigator