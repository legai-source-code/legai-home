'use client';
import React, { useEffect, useState, useRef } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleNavbar = (event: React.MouseEvent<HTMLDivElement, MouseEvent>)  => {
    // setNavbarOpen(!navbarOpen)

    // Check if X icon or one of the navLinks are clicked
    const isXIcon = event.target === navRef.current?.querySelector(`.${styles.hamburgerOpen}`);
    const isNavLink = event.target instanceof Element && event.target.matches(`.${styles.navLinks}`);

    if (navbarOpen && (isXIcon || isNavLink)) {
      setNavbarOpen(false);
    } else {
      setNavbarOpen(true)
    }
  }

  const closeNavbarOnClick = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      navRef?.current?.addEventListener('click', closeNavbarOnClick)
    }

    return () => {
      // Remove event listener on component unmount
      navRef?.current?.removeEventListener('click', closeNavbarOnClick);
    };
  }, [])

  return (
    <div className={styles.navigation} ref={navRef}>
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