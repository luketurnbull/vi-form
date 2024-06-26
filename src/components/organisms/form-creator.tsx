"use client";

import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "@/components/molecules/text-input";
import Button from "@/components/atoms/button";
import { FormInput } from "@/constants/global";
import Checkbox from "../molecules/checkbox";

import styles from "./form-creator.module.css";
import SelectInput from "@/components/molecules/select";
import { validationCreator } from "@/utils/validation-creator";

type FormData = {
  formInputs: FormInput[];
  onSubmit: SubmitHandler<FieldValues>;
};

export default function FormCreator({ formInputs, onSubmit }: FormData) {
  const { handleSubmit, control } = useForm({
    mode: "onBlur",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formContainer}>
        {formInputs.map((formInput: FormInput) => (
          <InputFactory
            key={formInput.name}
            formInput={formInput}
            control={control}
          />
        ))}
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
}

function InputFactory({
  formInput: { type, isRequired, options, ...rest },
  control,
}: {
  formInput: FormInput;
  control: Control<FieldValues, any>;
}) {
  const validationRules = validationCreator(type, isRequired, rest.name);

  switch (type) {
    case "text":
    case "email":
    case "phone":
    case "postcode":
      return (
        <TextInput
          {...rest}
          control={control}
          validationRules={validationRules}
        />
      );
    case "select":
      if (options) {
        return (
          <SelectInput
            {...rest}
            options={options}
            control={control}
            validationRules={validationRules}
          />
        );
      }
      return <></>;
    case "checkbox":
      return (
        <Checkbox
          {...rest}
          control={control}
          validationRules={validationRules}
        />
      );
    default:
      return <></>;
  }
}
