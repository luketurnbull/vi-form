import styles from "./page.module.css";
import UserForm, { FormInput } from "@/components/organisms/user-form";

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

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>V.I Form</h1>
      </div>
      <div>
        <UserForm formInputs={mockFormInputs} />
      </div>
    </main>
  );
}
