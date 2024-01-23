import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <h1>Welcome to LEG AI</h1>
      </div>
    </main>
  );
}
