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
    isRequired: true,
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    isRequired: true,
  },
  {
    type: "phone",
    name: "phone",
    label: "Phone",
    isRequired: true,
  },
  {
    type: "text",
    name: "address",
    label: "Address",
    isRequired: false,
  },
  {
    type: "postcode",
    name: "postcode",
    label: "Postcode",
    isRequired: true,
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
    isRequired: true,
  },
  {
    type: "checkbox",
    name: "terms",
    label: "I agree to the terms and conditions",
    isRequired: true,
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
