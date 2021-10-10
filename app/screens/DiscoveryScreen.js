import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/others/Screen";

function DiscoveryScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Discovery Screen</Text>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default DiscoveryScreen;
