import { FormInputType } from "@/constants/global";

export const validationCreator = (
  type: FormInputType,
  isRequired: boolean,
  name: string
) => {
  const validationRules: Record<string, any> = {};

  if (isRequired) {
    validationRules.required = `${
      name.charAt(0).toUpperCase() + name.slice(1)
    } is required`;
  }

  switch (type) {
    case "email":
      validationRules.pattern = {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Invalid email address",
      };
      break;
    case "phone":
      validationRules.pattern = {
        value: /^(\+?[1-9]\d{0,14}|0\d{9,10})$/,
        message: "Invalid phone number",
      };
      break;
    case "postcode":
      validationRules.maxLength = {
        value: 4,
        message: "Postcode must be 4 characters",
      };
      validationRules.minLength = {
        value: 4,
        message: "Postcode must be 4 characters",
      };
      validationRules.pattern = {
        value: /^[0-9]{4}$/,
        message: "Postcode must be a 4 digit number",
      };
      break;
    default:
      break;
  }

  return validationRules;
};
