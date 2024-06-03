export type FormInput = {
  type: "text" | "email" | "phone" | "postcode" | "select" | "checkbox";
  name: string;
  label: string;
  options?: string[];
  required: boolean;
};
