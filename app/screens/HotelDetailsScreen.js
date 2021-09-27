import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';
import Screen from '../components/Screen';

function HotelDetailsScreen({navigation}) {
    return (
        <Screen>
        <ScrollView>
        <View style={styles.container}>
            <View style={[tw`bg-black`,{height: 400}]}>
                <Image style={tw`w-full h-full opacity-70`} source={require('../assets/hotels/h1.jpg')} />
                <View style={tw`p-4 absolute mt-6 w-full`}>
                    <View style={tw`justify-between flex-row w-full`}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={tw`rounded-lg bg-gray-700 p-2 opacity-70`}><MaterialCommunityIcons color={colors.light} name="arrow-left" size={30} /></TouchableOpacity>
                        <TouchableOpacity style={tw`rounded-lg bg-gray-700 p-2 opacity-70`}><MaterialCommunityIcons color={colors.light} name="bookmark-outline" size={30} /></TouchableOpacity>
                    </View>
                    <View style={tw`mt-24`}>
                        <Text style={tw`text-3xl text-white font-bold`}>Hotel Flower Blooms so Far so Good</Text>
                        <View style={tw`flex-row items-center mt-5`}>
                            <View style={[tw`text-base p-2 mr-3 rounded`, { backgroundColor: colors.primary }]}>
                                <Text style={tw`text-white`}>5 Star Hotel</Text>
                            </View>
                            <View style={tw`flex-row justify-center items-center`}>
                                <MaterialCommunityIcons name="star" size={20} color={colors.yellow} />
                                <Text style={[tw`text-lg font-bold`,{ color: colors.yellow }]}>8,6</Text>
                                <Text style={tw`text-lg text-gray-200 `}>/17.851</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={tw`-mt-16`}>
                <ScrollView style={tw`mb-4`} horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={[tw`ml-4 p-2 rounded`,{backgroundColor: colors.secondary}]}><Text style={tw`text-base font-bold text-white`}>Overview</Text></TouchableOpacity>
                    <TouchableOpacity style={[tw`ml-4 p-2 rounded`,{backgroundColor: colors.medium}]}><Text style={tw`text-base font-bold text-white`}>Rooms</Text></TouchableOpacity>
                    <TouchableOpacity style={[tw`ml-4 p-2 rounded`,{backgroundColor: colors.medium}]}><Text style={tw`text-base font-bold text-white`}>Prices</Text></TouchableOpacity>
                    <TouchableOpacity style={[tw`ml-4 p-2 rounded`,{backgroundColor: colors.medium}]}><Text style={tw`text-base font-bold text-white`}>Review</Text></TouchableOpacity>
                    <TouchableOpacity style={[tw`ml-4 p-2 rounded`,{backgroundColor: colors.medium}]}><Text style={tw`text-base font-bold text-white`}>Photos</Text></TouchableOpacity>
                </ScrollView>
                <View style={tw`p-4 rounded-t-2xl bg-white`}>
                    <Text style={tw`text-xl font-bold`}>Overview</Text>
                    <Text style={tw`text-lg text-justify`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at voluptates! Ullam, fuga.</Text>
                    <Text style={tw`text-lg text-justify mt-3`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, enim ea! Exercitationem eiciendis </Text>
                </View>
                <View style={tw`w-full px-4 flex-row`}>
                    <View style={tw`w-4/12 p-2`}>
                        <Text style={tw`text-base text-gray-400`}>Start at</Text>
                        <View style={tw`flex-row`}><Text style={tw`text-2xl mr-2 text-black font-bold`}>$120</Text><Text style={tw`text-base text-gray-400`}>/night</Text></View>
                    </View>
                    <TouchableOpacity style={[tw`p-3 w-8/12 mx-auto rounded-xl justify-center items-center`,{backgroundColor: colors.primary}]}>
                        <Text style={tw`font-bold text-lg text-white`}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {

    }
})
export default HotelDetailsScreen