import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import FilterScreen from '../screens/FilterScreen';
import HomeScreen from '../screens/HomeScreen';
import HotelDetailsScreen from '../screens/HotelDetailsScreen';

const Stack = createNativeStackNavigator()


function HomeNavigator() {
    return (
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="filter" component={FilterScreen} options={{presentation: 'modal'}} />
            <Stack.Screen name="hotelDetail" component={HotelDetailsScreen}  options={{presentation: 'fullScreenModal'}}/>
        </Stack.Navigator>
    )
}
export default HomeNavigator