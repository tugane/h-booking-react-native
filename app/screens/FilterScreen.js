import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Screen from '../components/Screen'
import tw from 'tailwind-react-native-classnames'
import colors from '../config/colors'

function FilterScreen() {
    return (
        <Screen>
            <View style={tw`w-full p-4 bg-white`}>
                <View style={tw`items-center pb-5 border-b-2 border-gray-100`}>
                    <Text style={tw`text-xl font-bold`}>Filter</Text>
                </View>
                <View style={tw`mt-2 py-5 border-b-2 border-gray-100`}>
                    <Text style={tw`text-lg`}>Type</Text>
                    <ScrollView horizontal>
                        <View style={tw`flex-row mt-3`}>
                            <TouchableOpacity style={[tw`p-2 px-3 rounded-full border-gray-100 border-2 mr-2`,{backgroundColor: colors.primary}]}><Text style={tw`text-xl text-white`}>Any</Text></TouchableOpacity>
                            <TouchableOpacity style={tw`p-2 px-3 rounded-full border-gray-100 border-2 mr-2`}><Text style={tw`text-xl`}>Apartment</Text></TouchableOpacity>
                            <TouchableOpacity style={tw`p-2 px-3 rounded-full border-gray-100 border-2 mr-2`}><Text style={tw`text-xl`}>Studio</Text></TouchableOpacity>
                            <TouchableOpacity style={tw`p-2 px-3 rounded-full border-gray-100 border-2 mr-2`}><Text style={tw`text-xl`}>Expensive</Text></TouchableOpacity>
                            <TouchableOpacity style={tw`p-2 px-3 rounded-full border-gray-100 border-2 mr-2`}><Text style={tw`text-xl`}>Offices</Text></TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View style={tw`mt-2 py-5 border-b-2 border-gray-100`}>
                    <Text style={tw`text-lg`}>Price</Text>
                    <View style={tw`flex-row mt-3`}>
                        <View style={tw`border-b-2 border-gray-100`}>
                            <Text style={[tw`text-xl font-bold`, { color: colors.primary }]}>$800 - $1000</Text>
                            
                        </View>
                    </View>
                </View>
                <View style={tw`mt-2 py-5 border-b-2 border-gray-100`}>
                    <Text style={tw`text-lg`}>Bredrooms</Text>
                    <View style={tw`flex-row mt-3 justify-between w-full`}>
                        <TouchableOpacity style={[tw`w-12 h-12 justify-center items-center rounded-full border-gray-100 border-2 mr-2`,{backgroundColor: colors.primary}]}><Text style={tw`text-xl text-white`}>1</Text></TouchableOpacity>
                        <TouchableOpacity style={tw`w-12 h-12 justify-center items-center rounded-full border-gray-100 border-2 mr-2`}><Text style={tw`text-xl`}>2</Text></TouchableOpacity>
                        <TouchableOpacity style={tw`w-12 h-12 justify-center items-center rounded-full border-gray-100 border-2 mr-2`}><Text style={tw`text-xl`}>3</Text></TouchableOpacity>
                        <TouchableOpacity style={tw`w-12 h-12 justify-center items-center rounded-full border-gray-100 border-2 mr-2`}><Text style={tw`text-xl`}>4</Text></TouchableOpacity>
                        <TouchableOpacity style={tw`w-12 h-12 justify-center items-center rounded-full border-gray-100 border-2 mr-2`}><Text style={tw`text-xl`}>5+</Text></TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={[tw`p-3 my-5 h-12 mx-auto rounded w-full justify-center items-center`,{backgroundColor: colors.primary}]}>
                    <Text style={tw`font-bold text-lg text-white`}>Continue</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {

    }
})
export default FilterScreen