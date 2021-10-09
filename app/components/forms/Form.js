import { Formik } from "formik";
import React from "react";

const Form = ({ validationSchema, initialValues, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default Form;
