"use client";

import { Control, Controller, FieldValues } from "react-hook-form";
import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";

import styles from "@/app/page.module.css";
import { FormInput } from "@/constants/global";

type CheckboxProps = Omit<FormInput, "type"> & {
  control: Control<FieldValues, any>;
};

export default function Checkbox({
  name,
  label,
  control,
  isRequired,
}: CheckboxProps) {
  const validationRules = isRequired
    ? { required: `${label} is required` }
    : {};

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      rules={validationRules}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControlLabel
            control={<MuiCheckbox {...field} checked={field.value} />}
            label={label}
          />
          {error && <p className={styles.error}>{error.message}</p>}
        </>
      )}
    />
  );
}
