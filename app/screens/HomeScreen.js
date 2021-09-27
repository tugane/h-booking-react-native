import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Screen from '../components/Screen'
import tw from 'tailwind-react-native-classnames'
import colors from '../config/colors'
import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import FilterScreen from './FilterScreen'
const hotelsLit = [
    {
        id: 1,
        name: 'The Rose Hotel',
        price: 120,
        distance: '2.4km',
        image: require('../assets/hotels/h1.jpg'),
        description: 'Sit consequat elit cupidatat adipisicing veniam anim consectetur voluptate consequat sunt Lorem excepteur labore. Et reprehenderit anim fugiat elit aliqua ex non eu culpa fugiat laboris irure consectetur irure. Aliquip commodo duis fugiat duis anim est cillum.'
    },
    {
        id: 2,
        name: 'MOXY NYC Times SquareOpens in new window',
        price: 420,
        distance: '2.1km',
        image: require('../assets/hotels/h2.jpg'),
        description: 'Culpa est ex fugiat proident id adipisicing. Occaecat excepteur culpa amet aute consequat dolore irure sunt excepteur eiusmod sint eu est. Et consectetur commodo est quis cillum irure esse minim.'
    },
    {
        id: 3,
        name: 'Riu Plaza Manhattan Times SquareOpens in new window',
        price: 310,
        distance: '4.5km',
        image: require('../assets/hotels/h3.jpg'),
        description: 'Lorem nulla elit reprehenderit tempor veniam ipsum aliquip proident. Veniam elit proident aliquip dolore esse pariatur non occaecat qui tempor sint do et. Duis nostrud elit quis do adipisicing laborum. Nulla consequat irure in ut proident quis voluptate qui consequat enim exercitation anim id culpa.'
    },
    {
        id: 4,
        name: 'Hotel Edison Times Square',
        price: 420,
        distance: '1.8km',
        image: require('../assets/hotels/h4.jpg'),
        description: 'Sint quis in eu aliqua culpa do laboris laboris et fugiat aliqua esse eiusmod. Cupidatat non esse excepteur do nulla sit eu ipsum et velit. Consequat ea consequat sint ea duis enim proident laborum excepteur nisi in. Deserunt sint nulla non tempor anim. Et nulla aliqua Lorem magna ea pariatur anim enim exercitation ea eu id reprehenderit culpa. Mollit ex reprehenderit enim proident cupidatat commodo sint.'
    },
    {
        id: 5,
        name: 'Ameritania at Times SquareOpens in new window',
        price: 220,
        distance: '2.3km',
        image: require('../assets/hotels/h5.jpg'),
        description: 'Tempor dolore esse elit laboris dolor elit dolore nulla id consectetur labore et. Commodo non id non est sit sit duis nostrud eu nulla. Ut irure occaecat eiusmod exercitation tempor fugiat ullamco excepteur ex ea reprehenderit consequat reprehenderit. Cupidatat dolore tempor et eu culpa nostrud tempor. Consectetur Lorem irure qui quis tempor mollit enim amet.'
    },
    {
        id: 6,
        name: 'Freehand New YorkOpens in new window',
        price: 150,
        distance: '3.5km',
        image: require('../assets/hotels/h6.jpg'),
        description: 'Reprehenderit do voluptate amet fugiat qui deserunt nostrud amet sint pariatur proident labore ad ad. Nisi deserunt in enim enim aliqua aute anim culpa id voluptate ipsum officia sit elit. Adipisicing incididunt deserunt veniam occaecat quis ad amet mollit aute magna exercitation culpa officia. Elit exercitation sunt deserunt elit consequat. Cillum commodo amet dolor magna.'
    },
    
]

function HomeScreen({navigation}) {
    const [showFilter, setShowFilter] = useState(false)
    const [hotels, setHotels] = useState(hotelsLit)
    const [hotelItemWidth, setHoteItemWidth] = useState(() => {
        const screen = Dimensions.get('screen')
        return screen.width-80
    })
    return (
        <Screen style={tw`bg-gray-100`}>
            <ScrollView>
            <View style={tw``}>
                <View style={tw`w-full h-60 bg-gray-900`}>
                    <Image style={tw`h-full w-full opacity-70`} source={ require('../assets/hotels/h6.jpg')} />
                </View>
                <View style={tw`p-4 absolute w-full h-full`}>
                    <View style={tw`flex-row justify-between `}>
                        <View>
                            <Text style={[tw`text-2xl font-bold text-gray-100`]}>Hi Tugane,</Text>
                            <Text style={[tw`text-lg font-bold mt-1 text-gray-100`]}>Where do you want to stay?</Text>
                        </View>
                        <View style={tw`h-10 w-10 overflow-hidden rounded-full`}>
                            <Image style={tw`h-full w-full`} source={ require('../assets/tugane.jpg')} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={[tw`p-4`]}>
                <View style={tw`p-4 -mt-10 mb-4 bg-white rounded-lg w-full flex-row justify-between`}>
                    <Ionicons style={tw`w-1/12`} name="search" color={colors.medium} size={20} />
                    <TouchableOpacity style={tw`w-10/12 h-full`}>
                        <TextInput name="search" style={tw`text-lg`} placeholderTextColor={colors.medium} placeholder="Search.." />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('filter')} style={tw`w-1/12 justify-center`}>
                        <View style={tw`mx-auto`}>
                            <MaterialCommunityIcons name="filter-variant" color={colors.medium} size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[tw`bg-white flex-row justify-between mb-6 rounded-xl`,{}]}>
                    <View style={tw`justify-center items-center p-5`}><Text style={tw`text-lg text-gray-500 font-bold`}>Motel</Text></View>
                    <View style={tw`justify-center items-center p-5 bg-gray-100`}><Text style={tw`text-lg text-gray-900 font-bold`}>Hotel</Text></View>
                    <View style={tw`justify-center items-center p-5`}><Text style={tw`text-lg text-gray-500 font-bold`}>Villa</Text></View>
                    <View style={tw`justify-center items-center p-5`}><Text style={tw`text-lg text-gray-500 font-bold`}>Home</Text></View>
                </View>
                <View style={[tw``,{flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <Text style={[tw`font-bold text-xl text-gray-500`]}>Best View</Text>
                    <Text style={[tw`font-bold text-sm text-gray-500`]}>see more</Text>
                </View>
                <FlatList
                    horizontal
                    contentContainerStyle={tw`flex-row py-4`}
                    data={hotels}
                    keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('hotelDetail')}>
                    <View style={[tw`p-2 rounded-lg mr-2 flex-row bg-white`,{width: hotelItemWidth}]}>
                        <View style={tw`w-1/3 rounded-lg overflow-hidden max-h-40`}>
                            <Image style={tw`w-full h-full`}  source={item.image}/>
                        </View>
                        <View style={tw`w-2/3 p-2`}>
                            <View style={tw`flex-row justify-between`}>
                                <Text style={tw`font-bold text-xl text-black w-10/12`}>{item.name}</Text>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons size={30} color={colors.medium} name="bookmark-outline" />
                                </TouchableOpacity>
                            </View>
                            <View style={tw`flex-row mt-1`}>
                                <MaterialCommunityIcons size={20} color={colors.yellow} name="star" />
                                <MaterialCommunityIcons size={20} color={colors.yellow} name="star" />
                                <MaterialCommunityIcons size={20} color={colors.yellow} name="star" />
                                <MaterialCommunityIcons size={20} color={colors.yellow} name="star" />
                                <MaterialCommunityIcons size={20} color={colors.yellow} name="star" />
                            </View>
                            <View style={tw`flex-row items-end justify-between flex-1 w-2/3`}>
                                <View>
                                    <Text style={tw` text-base text-gray-400`}>Start at</Text>
                                    <Text style={tw`font-bold text-xl text-black`}>$ {item.price}</Text>
                                </View>
                                <View>
                                    <Text style={tw` text-base text-gray-400`}>Distance</Text>
                                    <Text style={tw`font-bold text-xl text-black`}>{item.distance}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                    )}
                />
                <View style={[tw``,{flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <Text style={[tw`font-bold text-xl text-gray-500`]}>Arround You</Text>
                    <Text style={[tw`font-bold text-sm text-gray-500`]}>see more</Text>
                </View>
                <FlatList
                    contentContainerStyle={tw`py-4`}
                    data={hotels}
                    keyExtractor={item => item.id}
                    renderItem={({item})=>(
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('hotelDetail')}>
                    <View style={[tw`p-2 rounded-lg my-2 bg-white`]}>
                        <View style={tw`rounded-lg overflow-hidden max-h-40`}>
                            <Image style={tw`w-full h-full`} source={item.image} />
                            <TouchableOpacity style={tw`absolute self-end`}>
                                <MaterialCommunityIcons size={50} color={colors.yellow} name="bookmark-outline" />
                            </TouchableOpacity>
                        </View>
                        <View style={tw`p-2`}>
                            <View style={tw`flex-row justify-between`}>
                                <Text style={tw`font-bold text-xl text-black w-10/12`}>{item.name}</Text>
                            </View>
                            <View style={tw`flex-row`}>
                                <MaterialCommunityIcons size={20} color={colors.yellow} name="star" />
                                <MaterialCommunityIcons size={20} color={colors.yellow} name="star" />
                                <MaterialCommunityIcons size={20} color={colors.yellow} name="star" />
                                <MaterialCommunityIcons size={20} color={colors.yellow} name="star" />
                                <MaterialCommunityIcons size={20} color={colors.yellow} name="star" />
                            </View>
                            <View style={tw`flex-row items-end justify-between flex-1`}>
                                <View>
                                    <Text style={tw` text-base text-gray-400`}>Start at</Text>
                                    <Text style={tw`font-bold text-xl text-black`}>$ {item.price}</Text>
                                </View>
                                <View>
                                    <Text style={tw` text-base text-gray-400`}>Distance</Text>
                                    <Text style={tw`font-bold text-xl text-black`}>{item.distance}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                    )}
                />
                <View style={tw`w-full justify-center`}>
                    <TouchableOpacity style={[tw`p-3 h-12 mx-auto rounded w-2/4 justify-center items-center`,{backgroundColor: colors.secondary}]}>
                        <Text style={[tw`font-bold text-lg`,{color: colors.light}]}>View All</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
       </Screen>
    )
}
const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
export default HomeScreen