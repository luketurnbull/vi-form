"use client";

import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "@/components/molecules/text-input";
import Button from "@mui/material/Button";

export type FormInput = {
  type: "text" | "email" | "phone" | "postcode" | "select" | "checkbox";
  name: string;
  label: string;
  options?: string[];
  required: boolean;
};

type FormData = {
  formInputs: FormInput[];
};

export default function UserForm({ formInputs }: FormData) {
  const { handleSubmit, control } = useForm({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formInputs.map((formInput: FormInput) => (
        <InputFactory
          key={formInput.name}
          formInput={formInput}
          control={control}
        />
      ))}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

function InputFactory({
  formInput,
  control,
}: {
  formInput: FormInput;
  control: Control<FieldValues, any>;
}) {
  switch (formInput.type) {
    case "text":
      return (
        <TextInput
          name={formInput.name}
          label={formInput.label}
          control={control}
          required={formInput.required}
        />
      );
    default:
      return <></>;
  }
}
