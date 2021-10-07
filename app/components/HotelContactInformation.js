import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import SectionHeader from "./SectionHeader";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
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
        <View style={styles.addressWrap}>
          <MaterialCommunityIcons
            name="phone"
            size={35}
            color={colors.secondary}
          />
          <Text
            style={{
              marginLeft: 15,
              color: colors.medium,
              fontSize: 17,
              fontWeight: "500",
            }}
          >
            {hotel.phone}
          </Text>
        </View>
        <View style={styles.addressWrap}>
          <MaterialCommunityIcons
            name="map-marker"
            size={35}
            color={colors.secondary}
          />
          <Text
            style={{
              marginLeft: 15,
              color: colors.medium,
              fontSize: 17,
              fontWeight: "500",
            }}
          >
            {hotel.address}
          </Text>
        </View>
        <View style={styles.addressWrap}>
          <MaterialCommunityIcons
            name="train"
            size={35}
            color={colors.secondary}
          />
          <Text
            style={{
              marginLeft: 15,
              color: colors.medium,
              fontSize: 17,
              fontWeight: "500",
            }}
          >
            {hotel.near}
          </Text>
        </View>
        <View style={styles.addressWrap}>
          <MaterialCommunityIcons
            name="web"
            size={35}
            color={colors.secondary}
          />
          <Text
            style={{
              marginLeft: 15,
              color: colors.medium,
              fontSize: 17,
              fontWeight: "500",
            }}
          >
            {hotel.website}
          </Text>
        </View>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          showsMyLocationButton={true}
          showsBuildings={true}
          showsCompass={true}
          showsScale={true}
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
