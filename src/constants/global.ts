export type FormInput = {
  type: FormInputType;
  name: string;
  label: string;
  options?: string[];
  isRequired: boolean;
};

export type FormInputType =
  | "text"
  | "email"
  | "phone"
  | "postcode"
  | "select"
  | "checkbox";
