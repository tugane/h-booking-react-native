import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/others/Screen";

function ProfileScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default ProfileScreen;
