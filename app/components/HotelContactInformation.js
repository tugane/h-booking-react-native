import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import SectionHeader from "./SectionHeader";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Apptext from "./AppText";
const Hotelcontactinformation = ({ hotel }) => {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <>
      <SectionHeader
        title="Contacts"
        style={{ marginLeft: 15, marginTop: 15 }}
      />
      <View style={styles.container}>
        <Apptext
          iconName="phone"
          text={hotel.phone}
          style={styles.addressWrap}
        />
        <Apptext
          iconName="map-marker"
          text={hotel.address}
          style={styles.addressWrap}
        />
        <Apptext
          iconName="train"
          text={hotel.near}
          style={styles.addressWrap}
        />
        <Apptext
          iconName="web"
          text={hotel.website}
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
    </>
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

export default Hotelcontactinformation;
