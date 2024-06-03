"use client";

import { Control, Controller, FieldValues } from "react-hook-form";
import { TextField } from "@mui/material";
import { FormInput } from "@/constants/global";

type TextInputProps = Omit<FormInput, "type"> & {
  control: Control<FieldValues, any>;
};

export default function TextInput({
  name,
  label,
  control,
  isRequired,
}: TextInputProps) {
  const validationRules = isRequired
    ? { required: `${label} is required` }
    : {};

  return (
    <Controller
      name={name}
      control={control}
      rules={validationRules}
      defaultValue=""
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            {...field}
            label={label}
            error={!!error}
            helperText={error ? error.message : null}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        );
      }}
    />
  );
}
