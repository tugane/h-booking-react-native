import React from 'react'
import { SafeAreaView, StyleSheet} from 'react-native'
import colors from '../config/colors'

function Screen({ children,style }) {
    return (
        <SafeAreaView style={[styles.container,style]}>
            {children}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Screen