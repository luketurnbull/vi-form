"use client";

import { Form, useForm } from "react-hook-form";
import TextField from "@/components/molecules/text-field";

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
    <Form>
      <TextField />
    </Form>
  );
}
