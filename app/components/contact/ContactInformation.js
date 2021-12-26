import React, { forwardRef } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import SectionHeader from "../header/SectionHeader";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Apptext from "../others/AppText";
const contactinformation = ({ item }, ref) => {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View ref={ref}>
      <SectionHeader
        title="Contacts"
        style={{ marginLeft: 15, marginTop: 15 }}
      />
      <View ref={ref} style={styles.container}>
        <Apptext
          iconName="phone"
          text={item.phone}
          style={styles.addressWrap}
        />
        <Apptext
          iconName="map-marker"
          text={item.address}
          style={styles.addressWrap}
        />
        <Apptext iconName="train" text={item.near} style={styles.addressWrap} />
        <Apptext
          iconName="web"
          text={item.website}
          style={styles.addressWrap}
        />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={initialRegion}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
        ></MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addressWrap: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  container: {
    padding: 15,
  },
  mapContainer: {
    padding: 15,
    width: "100%",
    height: 400,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    borderWidth: 4,
    borderColor: colors.secondary,
    borderRadius: 15,
    height: "100%",
  },
});

export default forwardRef(contactinformation);
