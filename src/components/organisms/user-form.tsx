"use client";

import { Form, useForm } from "react-hook-form";
import TextField from "@/components/molecules/TextField";

export default function UserForm() {
  const { handleSubmit, control } = useForm();

  return (
    <Form>
      <TextField />
    </Form>
  );
}
