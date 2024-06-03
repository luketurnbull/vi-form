"use client";

import { Control, Controller, FieldValues } from "react-hook-form";
import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";

import styles from "@/app/page.module.css";

type CheckboxProps = {
  name: string;
  label: string;
  control: Control<FieldValues, any>;
  required: boolean;
};

export default function Checkbox({
  name,
  label,
  control,
  required,
}: CheckboxProps) {
  const validationRules = required ? { required: `${label} is required` } : {};

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
