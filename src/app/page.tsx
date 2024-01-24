import Image from "next/image";
import styles from "./page.module.css";
import { AuthenticationForm } from "./components/authentication/AuthenticationForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <h1>Welcome to LEG AI</h1>
        <p>Automate RFP Proposals</p>

        {/* Testing out mantine component authentication form */}
        <div className={styles.authFormContainer}>
          <AuthenticationForm />
        </div>
      </div>
    </main>
  );
}
