import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen'

function FavoriteScreen() {
    return (
        <Screen>
            <View style={styles.container}>
                <Text>Favorite Screen</Text>
            </View>
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {

    }
})
export default FavoriteScreen