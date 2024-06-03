"use client";

import { Control, FieldValues, Form, useForm } from "react-hook-form";
import TextInput from "@/components/molecules/text-input";

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
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(() => {})}>
      {formInputs.map((formInput: FormInput) => (
        <InputFactory
          key={formInput.name}
          formInput={formInput}
          control={control}
        />
      ))}
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
