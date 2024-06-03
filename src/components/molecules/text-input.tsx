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
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ? `${label} is required` : false }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          error={!!error}
          helperText={error ? error.message : null}
          fullWidth
          variant="outlined"
          margin="normal"
        />
      )}
    />
  );
}
