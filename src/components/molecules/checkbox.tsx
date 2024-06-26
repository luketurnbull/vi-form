"use client";

import { Control, Controller, FieldValues } from "react-hook-form";
import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";

import styles from "@/app/page.module.css";
import { FormInput } from "@/constants/global";

type CheckboxProps = Omit<FormInput, "type" | "isRequired"> & {
  control: Control<FieldValues, any>;
  validationRules?: Record<string, any>;
};

export default function Checkbox({
  name,
  label,
  control,
  validationRules,
}: CheckboxProps) {
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
