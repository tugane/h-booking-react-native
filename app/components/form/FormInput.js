import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../../config/colors";
import Errormessage from "./ErrorMessage";

const Forminput = ({ name, ...OtherProps }) => {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();
  return (
    <>
      <TextInput
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        style={{
          borderBottomColor: colors.medium,
          borderBottomWidth: 1,
          backgroundColor: colors.light,
          padding: 15,
          marginVertical: 10,
          borderRadius: 7,
          color: colors.medium,
          fontSize: 20,
        }}
        placeholderTextColor={colors.medium}
        {...OtherProps}
      />
      <Errormessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({});

export default Forminput;
