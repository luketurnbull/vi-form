"use client";

import { Control, Controller, FieldValues } from "react-hook-form";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { FormInput } from "@/constants/global";

type SelectInputProps = Omit<FormInput, "type" | "isRequired"> & {
  control: Control<FieldValues, any>;
  options: string[];
  validationRules?: Record<string, any>;
};

export default function SelectInput({
  name,
  label,
  control,
  validationRules,
  options,
}: SelectInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={validationRules}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth margin="normal" error={!!error}>
          <InputLabel>{label}</InputLabel>
          <Select {...field} label={label}>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
