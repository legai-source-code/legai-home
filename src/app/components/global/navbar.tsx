import styles from './navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          {/* TODO: Logo here */}
          <Link href="/">
            Logo here
          </Link>
        </div>
        {/* Nav Links */}
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
  )
}