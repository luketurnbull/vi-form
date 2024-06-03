"use client";

import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "@/components/molecules/text-input";
import Button from "@/components/atoms/button";
import { FormInput } from "@/constants/global";
import Checkbox from "../molecules/checkbox";

import styles from "./form-creator.module.css";

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
  formInput: { type, ...rest },
  control,
}: {
  formInput: FormInput;
  control: Control<FieldValues, any>;
}) {
  switch (type) {
    case "text":
    case "email":
    case "phone":
    case "postcode":
      return <TextInput {...rest} control={control} />;
    case "select":
      return <></>;
    case "checkbox":
      return <Checkbox {...rest} control={control} />;
    default:
      return <></>;
  }
}
