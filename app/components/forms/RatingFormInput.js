import React from "react";
import { View, StyleSheet } from "react-native";
import Errormessage from "../forms/ErrorMessage";
import StarRating from "react-native-star-rating";
import { useFormikContext } from "formik";

const Ratingforminput = ({ name, ...OtherProps }) => {
  const { values, errors, setFieldValue, touched } = useFormikContext();
  return (
    <View>
      <View>
        <StarRating
          {...OtherProps}
          rating={values[name]}
          selectedStar={(rating) => setFieldValue(name, rating)}
        />
      </View>
      <Errormessage
        error={errors[name]}
        visible={touched[name]}
        checkVisible={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Ratingforminput;
