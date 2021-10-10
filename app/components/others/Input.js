import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Input({ height, width, iconName, iconSize, iconColor,...otherProps }) {
    return (
        <View style={[styles.container, { height: height, width: width }]}>
            {icon && <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} /> }
            <TextInput style={{ width: '100%', height:"100%" }} {...otherProps} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    }
})
export default Input