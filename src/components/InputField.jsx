import React from "react";
import { useField } from "formik";
import { Input, Typography } from "@material-tailwind/react";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Input size="lg" label={label} {...field} {...props} />
      {meta.touched && meta.error ? (
        <Typography className="text-red-500">{meta.error}</Typography>
      ) : null}
    </>
  );
};

export default InputField;
