"use client";

import { FormInput } from "@/constants/global";
import FormCreator from "../organisms/form-creator";

import styles from "./user-form.module.css";
import { FieldValues } from "react-hook-form";
import { useState } from "react";

const mockFormInputs: FormInput[] = [
  {
    type: "text",
    name: "name",
    label: "Name",
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    required: true,
  },
  {
    type: "phone",
    name: "phone",
    label: "Phone",
    required: true,
  },
  {
    type: "text",
    name: "address",
    label: "Address",
    required: false,
  },
  {
    type: "postcode",
    name: "postcode",
    label: "Postcode",
    required: true,
  },
  {
    type: "select",
    name: "state",
    label: "State",
    options: [
      "Australian Capital Territory",
      "New South Wales",
      "Northern Territory",
      "Queensland",
      "South Australia",
      "Tasmania",
      "Victoria",
      "Western Australia",
    ],
    required: true,
  },
  {
    type: "checkbox",
    name: "terms",
    label: "I agree to the terms and conditions",
    required: true,
  },
];

export default function UserForm() {
  const [formData, setFormData] = useState<string | null>(null);

  const handleSubmit = (data: FieldValues) => {
    setFormData(JSON.stringify(data));
  };

  return (
    <div className={styles.formContainer}>
      <FormCreator formInputs={mockFormInputs} onSubmit={handleSubmit} />
      {formData && <p>{formData}</p>}
    </div>
  );
}
