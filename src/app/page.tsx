import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navigation}>
        <div className={styles.navContainer}>
          {/* TODO: Logo here */}
          Logo here
          <ul className={styles.navLinks}>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <h1>Welcome to LEG AI</h1>
    </main>
  );
}
