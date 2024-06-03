import styles from "./page.module.css";
import UserForm from "@/components/organisms/user-form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>V.I Form</h1>
      </div>
      <div>
        <UserForm />
      </div>
    </main>
  );
}
