import { useFormikContext } from "formik";
import React from "react";
import colors from "../../config/colors";
import Button from "../others/Button";

const Formsubmit = ({
  text,
  width = "50%",
  backgroundColor = `${colors.primary}`,
  style,
}) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      style={style}
      backgroundColor={backgroundColor}
      width={width}
      text={text}
      onPress={handleSubmit}
    />
  );
};

export default Formsubmit;
