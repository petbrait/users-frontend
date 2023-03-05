import React from "react";
import { Input, Typography } from "@mui/material";

interface InputProps {
  type: string;
  register?: any;
  errors?: any;
  keyName: string;
  placeholder: string;
  value?: any;
  validate?: any;
  minLength?: string;
}

const Index = (props: InputProps) => {
  const {
    register,
    keyName,
    validate,
    minLength,
    value,
    type,
    errors,
    placeholder,
  } = props;
  return (
    <div>
      <Input
        sx={{ fontFamily: "Poppins" }}
        fullWidth={true}
        {...register(keyName, {
          required: true,
          validate: validate,
          minLength: minLength,
        })}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      {errors[keyName] && (
        <Typography variant="caption">* Este campo es requerido</Typography>
      )}
    </div>
  );
};

export default Index;
