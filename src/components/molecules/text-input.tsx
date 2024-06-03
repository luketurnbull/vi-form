"use client";

import { Control, Controller, FieldValues } from "react-hook-form";
import { TextField } from "@mui/material";

type TextInputProps = {
  name: string;
  label: string;
  control: Control<FieldValues, any>;
  required: boolean;
};

export default function TextInput({
  name,
  label,
  control,
  required,
}: TextInputProps) {
  const validationRules = required ? { required: `${label} is required` } : {};

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
            required={required}
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
