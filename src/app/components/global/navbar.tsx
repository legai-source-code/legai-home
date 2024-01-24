'use client';
import { useState, useRef } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNavbar = ()  => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <div className={styles.navigation}>
      <div className={styles.logoContainer}>
        {/* TODO: Logo here */}
        <Link href="/">
          Logo here
        </Link>
      </div>
      {/* TODO Mobile navigation toggle */}
      <div onClick={toggleNavbar} className={styles.toggle}>
        {navbarOpen ? (
          <div className={styles.hamburgerOpen}></div> 
        ) : (
          <div className={styles.hamburger}></div>
        )}
      </div>
      {/* Nav Links */}
      <div className={`${styles.navLinkContainer} ${navbarOpen ? styles.navLinkContainerOpen : ''}`}>
        <Link className={styles.navLinks} href="/about">About</Link>
        <Link className={styles.navLinks} href="/services">Services</Link>
        <Link className={styles.navLinks} href="/contact">Contact</Link>
      </div>
    </div>
  )
}